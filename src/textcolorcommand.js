import Command from '@ckeditor/ckeditor5-core/src/command';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';

export default class TextColorCommand extends Command {

    /**
     * @inheritDoc
     */
    refresh() {
        const model = this.editor.model;
        const doc = model.document;

        this.value = doc.selection.getAttribute( 'textColor' );
        this.isEnabled = model.schema.checkAttributeInSelection( doc.selection, 'textColor' );
    }

    /**
     * Executes the command. Applies the `value` of the {@link #attributeKey} to the selection.
     * If no `value` is passed, it removes the attribute from the selection.
     *
     * @protected
     * @param {Object} [options] Options for the executed command.
     * @param {String} [options.value] The value to apply.
     * @fires execute
     */
    execute( options = {} ) {
        const model = this.editor.model;
        const document = model.document;
        const selection = document.selection;

        const color = (options.value === 'rgba(0,0,0,0)' ? null : options.value);

        model.change( writer => {
            const ranges = model.schema.getValidRanges( selection.getRanges(), 'textColor' );

            if ( selection.isCollapsed ) {
                const position = selection.getFirstPosition();

                // When selection is inside text with `textColor` attribute.
                if ( selection.hasAttribute( 'textColor' ) ) {
                    // Find the full text color range.
                    const isSameHighlight = value => {
                        return value.item.hasAttribute( 'textColor' ) && value.item.getAttribute( 'textColor' ) === this.value;
                    };

                    const textColorStart = position.getLastMatchingPosition( isSameHighlight, { direction: 'backward' } );
                    const textColorEnd = position.getLastMatchingPosition( isSameHighlight );

                    const textColorRange = new Range( textColorStart, textColorEnd );

                    // Then depending on current value...
                    if ( !color || this.value === color ) {
                        // ...remove attribute when passing text color different than current or executing "eraser".
                        writer.removeAttribute( 'textColor', textColorRange );
                        writer.removeSelectionAttribute( 'textColor' );
                    } else {
                        // ...update `textColor` value.
                        writer.setAttribute( 'textColor', color, textColorRange );
                        writer.setSelectionAttribute( 'textColor', color );
                    }
                } else if ( color ) {
                    writer.setSelectionAttribute( 'textColor', color );
                }
            } else {
                for ( const range of ranges ) {
                    if ( color ) {
                        writer.setAttribute( 'textColor', color, range );
                    } else {
                        writer.removeAttribute( 'textColor', range );
                    }
                }
            }
        } );
    }
}
