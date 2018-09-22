/**
 * @module font/fontsize
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import TextColorEditing from './textcolorediting';
import TextColorUI from './textcolorui';

export default class TextColor extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires() {
        return [ TextColorEditing, TextColorUI ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'TextColor';
    }
}
