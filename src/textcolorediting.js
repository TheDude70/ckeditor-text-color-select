import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import {upcastElementToAttribute} from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import TextColorCommand from './textcolorcommand';
import Colors from './colors.js';

const TEXT_COLOR = 'textColor';

Array.prototype.closest = function (str) {
    let min = 0xffffff;
    let best, current, i;
    for (i = 0; i < this.length; i++) {
        current = dist(this[i].color.substr(1), str.substr(1));
        if (current < min) {
            min = current;
            best = this[i];
        }
    }
    return best;
};

export default class TextColorEditing extends Plugin {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super(editor);

        // Define default configuration using named presets.
        editor.config.define(TEXT_COLOR, Colors);
    }

    /**
     * @inheritDoc
     */
    init() {
        const editor = this.editor;

        // Allow textColor attribute on text nodes.
        editor.model.schema.extend('$text', {allowAttributes: TEXT_COLOR});

        // Define view to model conversion.
        const options = editor.config.get('textColor.options');
        const definition = _buildDefinition(options);

        // Set-up the two-way conversion.
        editor.conversion.attributeToElement(definition);

        editor.conversion.for('upcast')
            .add(upcastElementToAttribute({
                view: {
                    name: 'span',
                    attributes: {
                        title: 'color'
                    }
                },
                model: {
                    key: TEXT_COLOR,
                    value: viewElement => {
                        const color = viewElement.getStyle('color');

                        if (!color) {
                            return null
                        }

                        // determine closest color
                        const regEx = /^rgb\((\d*),\s?(\d*),\s?(\d*)\)$/;
                        let rgb = regEx.exec(color);
                        if (!rgb) {
                            return null;
                        }
                        let best = options.closest(toHex(rgb[1], rgb[2], rgb[3]));

                        if (!best) {
                            return null;
                        }

                        return best.model;
                    }
                }
            }));

        // Add TextColor command.
        editor.commands.add(TEXT_COLOR, new TextColorCommand(editor));
    }
}

function _buildDefinition(options) {
    const definition = {
        model: {
            key: TEXT_COLOR,
            values: []
        },
        view: {},
        upcastAlso: {}
    };

    for (const option of options) {
        definition.model.values.push(option.model);
        definition.view[option.model] = {
            name: 'span',
            styles: {
                'color': option.model
            },
            priority: 5
        };
    }

    return definition;
}

function toRGB(color) {
    let hex = color.substring(1);

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function toHex(r, g, b) {
    return '#' + parseInt(r).toString(16).padStart(2, '0') + parseInt(g).toString(16).padStart(2, '0') + parseInt(b).toString(16).padStart(2, '0');
}

function dist(s, t) {
    if (!s.length || !t.length) return 0;
    return dist(s.slice(2), t.slice(2)) +
        Math.abs(parseInt(s.slice(0, 2), 16) - parseInt(t.slice(0, 2), 16));
}