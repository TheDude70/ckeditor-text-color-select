const colors = [
    {
        title: 'Black',
        color: '#000000',
    },
    {
        model: 'aliceblue',
        title: 'Alice Blue',
        color: '#F0F8FF',
    },
    {
        model: 'antiquewhite',
        title: 'Antique White',
        color: '#FAEBD7',
    },
    {
        model: 'aquamarine',
        title: 'Aqua Marine',
        color: '#7FFFD4',
    },
    {
        model: 'azure',
        title: 'Azure',
        color: '#F0FFFF',
    },
    {
        model: 'beige',
        title: 'Beige',
        color: '#F5F5DC',
    },
    {
        model: 'bisque',
        title: 'Bisque',
        color: '#FFE4C4',
    },
    {
        model: 'blanchedalmond',
        title: 'Blanched Almond',
        color: '#FFEBCD',
    },
    {
        model: 'blue',
        title: 'Blue',
        color: '#0000FF',
    },
    {
        model: 'blueviolet',
        title: 'Blue Violet',
        color: '#8A2BE2',
    },
    {
        model: 'brown',
        title: 'Brown',
        color: '#A52A2A',
    },
    {
        model: 'burlyweood',
        title: 'Burly Wood',
        color: '#DEB887',
    },
    {
        model: 'cadetblue',
        title: 'Cadet Blue',
        color: '#5F9EA0',
    },
    {
        model: 'chartreuse',
        title: 'Chartreuse',
        color: '#7FFF00',
    },
    {
        model: 'chocolate',
        title: 'Chocolate',
        color: '#D2691E',
    },
    {
        model: 'coral',
        title: 'Coral',
        color: '#FF7F50',
    },
    {
        model: 'cornflowerblue',
        title: 'Cornflower Blue',
        color: '#6495ED',
    },
    {
        model: 'cornsilk',
        title: 'Cornsilk',
        color: '#FFF8DC',
    },
    {
        model: 'crimson',
        title: 'Crimson',
        color: '#DC143C',
    },
    {
        model: 'cyan',
        title: 'Cyan',
        color: '#00FFFF',
    },
    {
        model: 'darkblue',
        title: 'Dark Blue',
        color: '#00008B',
    },
    {
        model: 'darkcyan',
        title: 'Dark Cyan',
        color: '#008B8B',
    },
    {
        model: 'darkgoldenrod',
        title: 'Dark Golden Rod',
        color: '#B8860B',
    },
    {
        model: 'darkgray',
        title: 'Dark Gray',
        color: '#A9A9A9',
    },
    {
        model: 'darkgreen',
        title: 'Dark Green',
        color: '#006400',
    },
    {
        model: 'darkkhaki',
        title: 'DarkKhaki',
        color: '#BDB76B',
    },
    {
        model: 'darkmagenta',
        title: 'Dark Magenta',
        color: '#8B008B',
    },
    {
        model: 'darkolivegreen',
        title: 'Dark Olive Green',
        color: '#556B2F',
    },
    {
        model: 'darkorange',
        title: 'Dark Orange',
        color: '#FF8C00',
    },
    {
        model: 'darkorchid',
        title: 'Dark Orchid',
        color: '#9932CC',
    },
    {
        model: 'darkred',
        title: 'Dark Red',
        color: '#8B0000',
    },
    {
        model: 'darksalmon',
        title: 'Dark Salmon',
        color: '#E9967A',
    },
    {
        model: 'darkseagreen',
        title: 'Dark Sea Green',
        color: '#8FBC8F',
    },
    {
        model: 'darkslateblue',
        title: 'Dark Slate Blue',
        color: '#483D8B',
    },
    {
        model: 'darkslategray',
        title: 'Dark Slate Gray',
        color: '#2F4F4F',
    },
    {
        model: 'darkturquoise',
        title: 'Dark Turquoise',
        color: '#00CED1',
    },
    {
        model: 'darkviolet',
        title: 'Dark Violet',
        color: '#9400D3',
    },
    {
        model: 'deeppink',
        title: 'Deep Pink',
        color: '#FF1493',
    },
    {
        model: 'deepskyblue',
        title: 'Deep Sky Blue',
        color: '#00BFFF',
    },
    {
        model: 'dimgray',
        title: 'Dim Gray',
        color: '#696969',
    },
    {
        model: 'dodgerblue',
        title: 'Dodger Blue',
        color: '#1E90FF',
    },
    {
        model: 'firebrick',
        title: 'Fire Brick',
        color: '#B22222',
    },
    {
        model: 'floralwhite',
        title: 'Floral White',
        color: '#FFFAF0',
    },
    {
        model: 'forestgreen',
        title: 'Forest Green',
        color: '#228B22',
    },
    {
        model: 'fuchsia',
        title: 'Fuchsia',
        color: '#FF00FF',
    },
    {
        model: 'gainsboro',
        title: 'Gainsboro',
        color: '#DCDCDC',
    },
    {
        model: 'ghostwhite',
        title: 'Ghost White',
        color: '#F8F8F8',
    },
    {
        model: 'gold',
        title: 'Gold',
        color: '#FFD700',
    },
    {
        model: 'goldenrod',
        title: 'Golden Rod',
        color: '#DAA520',
    },
    {
        model: 'gray',
        title: 'Gray',
        color: '#808080',
    },
    {
        model: 'green',
        title: 'Green',
        color: '#008800',
    },
    {
        model: 'greenyellow',
        title: 'Green Yellow',
        color: '#ADFF2F',
    },
    {
        model: 'honeydew',
        title: 'Honey Dew',
        color: '#F0FFF0',
    },
    {
        model: 'hotpink',
        title: 'Hot Pink',
        color: '#FF69B4',
    },
    {
        model: 'indianred',
        title: 'Indian Red',
        color: '#CD5C5C',
    },
    {
        model: 'indigo',
        title: 'Indigo',
        color: '#4B0082',
    },
    {
        model: 'ivory',
        title: 'Ivory',
        color: '#FFFFF0',
    },
    {
        model: 'khaki',
        title: 'Khaki',
        color: '#F0E68C',
    },
    {
        model: 'lavender',
        title: 'Lavender',
        color: '#E6E6FA',
    },
    {
        model: 'lavenderblush',
        title: 'Lavender Blush',
        color: '#FFF0F5',
    },
    {
        model: 'lawngreen',
        title: 'Lawn Green',
        color: '#7CFC00',
    },
    {
        model: 'lemonchiffon',
        title: 'Lemon Chiffon',
        color: '#FFFACD',
    },
    {
        model: 'lightblue',
        title: 'Light Blue',
        color: '#ADD8E6',
    },
    {
        model: 'lightcoral',
        title: 'Light Coral',
        color: '#F08080',
    },
    {
        model: 'lightcyan',
        title: 'Light Cyan',
        color: '#E0FFFF',
    },
    {
        model: 'lightgoldenrodyellow',
        title: 'Light Golden Rod Yellow',
        color: '#FAFAD2',
    },
    {
        model: 'lightgray',
        title: 'Light Gray',
        color: '#D3D3D3',
    },
    {
        model: 'lightgreen',
        title: 'Light Green',
        color: '#90EE90',
    },
    {
        model: 'lightpink',
        title: 'Light Pink',
        color: '#FFB6C1',
    },
    {
        model: 'lightsalmon',
        title: 'Light Salmon',
        color: '#FFA07A',
    },
    {
        model: 'lightseagreen',
        title: 'Light Sea Green',
        color: '#20B2AA',
    },
    {
        model: 'lightskyblue',
        title: 'Light Sky Blue',
        color: '#87CEFA',
    },
    {
        model: 'lightslategray',
        title: 'Light Slate Gray',
        color: '#778899',
    },
    {
        model: 'lightsteelblue',
        title: 'Light Steel Blue',
        color: '#B0C4DE',
    },
    {
        model: 'lightyellow',
        title: 'Light Yellow',
        color: '#FFFFE0',
    },
    {
        model: 'lime',
        title: 'Lime',
        color: '#00FF00',
    },
    {
        model: 'limegreen',
        title: 'Lime Green',
        color: '#32CD32',
    },
    {
        model: 'linen',
        title: 'Linen',
        color: '#FAF0E6',
    },
    {
        model: 'maroon',
        title: 'Maroon',
        color: '#800000',
    },
    {
        model: 'mediumaquamarine',
        title: 'Medium Aqua Marine',
        color: '#66CDAA',
    },
    {
        model: 'mediumblue',
        title: 'Medium Blue',
        color: '#0000CD',
    },
    {
        model: 'mediumorchid',
        title: 'Medium Orchid',
        color: '#BA55D3',
    },
    {
        model: 'mediumpurple',
        title: 'Medium Purple',
        color: '#9370DB',
    },
    {
        model: 'mediumseagreen',
        title: 'Medium Sea Green',
        color: '#3CB371',
    },
    {
        model: 'mediumslateblue',
        title: 'Medium Slate Blue',
        color: '#7B68EE',
    },
    {
        model: 'mediumspringgreen',
        title: 'Medium Spring Green',
        color: '#00FA9A',
    },
    {
        model: 'mediumturquoise',
        title: 'Medium Turquoise',
        color: '#48D1CC',
    },
    {
        model: 'mediumvioletred',
        title: 'Medium Violet Red',
        color: '#C71585',
    },
    {
        model: 'midnightblue',
        title: 'Midnight Blue',
        color: '#191970',
    },
    {
        model: 'mintcream',
        title: 'Mint Cream',
        color: '#F5FFFA',
    },
    {
        model: 'mistyrose',
        title: 'Misty Rose',
        color: '#FFE4E1',
    },
    {
        model: 'moccasin',
        title: 'Moccasin',
        color: '#FFE4B5',
    },
    {
        model: 'navajowhite',
        title: 'Navajo White',
        color: '#FFDEAD',
    },
    {
        model: 'navy',
        title: 'Navy',
        color: '#000080',
    },
    {
        model: 'oldlace',
        title: 'Old Lace',
        color: '#FDF5E6',
    },
    {
        model: 'olive',
        title: 'Olive',
        color: '#808000',
    },
    {
        model: 'olivedrab',
        title: 'Olive Drab',
        color: '#6B8E23',
    },
    {
        model: 'orange',
        title: 'Orange',
        color: '#FFA500',
    },
    {
        model: 'orangered',
        title: 'Orange Red',
        color: '#FF4500',
    },
    {
        model: 'orchid',
        title: 'Orchid',
        color: '#DA70D6',
    },
    {
        model: 'palegoldenrod',
        title: 'Pale Golden Rod',
        color: '#EEE8AA',
    },
    {
        model: 'palegreen',
        title: 'Pale Green',
        color: '#98FB98',
    },
    {
        model: 'paleturquoise',
        title: 'Pale Turquoise',
        color: '#AFEEEE',
    },
    {
        model: 'palevioletred',
        title: 'Pale Violet Red',
        color: '#DB7093',
    },
    {
        model: 'papayawhip',
        title: 'Papaya Whip',
        color: '#FFEFD5',
    },
    {
        model: 'peachpuff',
        title: 'Peach Puff',
        color: '#FFDAB9',
    },
    {
        model: 'peru',
        title: 'Peru',
        color: '#CD853F',
    },
    {
        model: 'pink',
        title: 'Pink',
        color: '#FFC0CB',
    },
    {
        model: 'plum',
        title: 'Plum',
        color: '#DDA0DD',
    },
    {
        model: 'powderblue',
        title: 'Powder Blue',
        color: '#B0E0E6',
    },
    {
        model: 'purple',
        title: 'Purple',
        color: '#800080',
    },
    {
        model: 'rebeccapurple',
        title: 'Rebecca Purple',
        color: '#663399',
    },
    {
        model: 'red',
        title: 'Red',
        color: '#FF0000',
    },
    {
        model: 'rosybrown',
        title: 'RosyBrown',
        color: '#BC8F8F',
    },
    {
        model: 'royalblue',
        title: 'Royal Blue',
        color: '#4169E1',
    },
    {
        model: 'saddlebrown',
        title: 'Saddle Brown',
        color: '#8B4513',
    },
    {
        model: 'salmon',
        title: 'Salmon',
        color: '#FA8072',
    },
    {
        model: 'sandybrown',
        title: 'Sandy Brown',
        color: '#F4A460',
    },
    {
        model: 'seagreen',
        title: 'Sea Green',
        color: '#2E8B57',
    },
    {
        model: 'seashell',
        title: 'Sea Shell',
        color: '#FFF5EE',
    },
    {
        model: 'sienna',
        title: 'Sienna',
        color: '#A0522D',
    },
    {
        model: 'silver',
        title: 'Silver',
        color: '#C0C0C0',
    },
    {
        model: 'skyblue',
        title: 'Sky Blue',
        color: '#87CEEB',
    },
    {
        model: 'slateblue',
        title: 'Slate Blue',
        color: '#6A5ACD',
    },
    {
        model: 'slategray',
        title: 'Slate Gray',
        color: '#708090',
    },
    {
        model: 'snow',
        title: 'Snow',
        color: '#FFFAFA',
    },
    {
        model: 'springgreen',
        title: 'Spring Green',
        color: '#00FF7F',
    },
    {
        model: 'steelblue',
        title: 'Steel Blue',
        color: '#4682B4',
    },
    {
        model: 'tan',
        title: 'Tan',
        color: '#D2B48C',
    },
    {
        model: 'teal',
        title: 'Teal',
        color: '#008080',
    },
    {
        model: 'thistle',
        title: 'Thistle',
        color: '#D8BFD8',
    },
    {
        model: 'tomato',
        title: 'Tomato',
        color: '#FF6347',
    },
    {
        model: 'turquoise',
        title: 'Turquoise',
        color: '#40E0D0',
    },
    {
        model: 'violet',
        title: 'Violet',
        color: '#EE82EE',
    },
    {
        model: 'wheat',
        title: 'Wheat',
        color: '#F5DEB3',
    },
    {
        model: 'white',
        title: 'White',
        color: '#FFFFFF',
    },
    {
        model: 'whitesmoke',
        title: 'White Smoke',
        color: '#F5F5F5',
    },
    {
        model: 'yellow',
        title: 'Yellow',
        color: '#FFFF00',
    },
    {
        model: 'yellowgreen',
        title: 'Yellow Green',
        color: '#9ACD32',
    }
];

function getHue(color) {
    /* Get the hex value without hash symbol. */
    let hex = color.substring(1);

    /* Get the RGB values to calculate the Hue. */
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    /* Getting the Max and Min values for Chroma. */
    let max = Math.max.apply(Math, [r, g, b]);
    let min = Math.min.apply(Math, [r, g, b]);

    /* Variables for HSV value of hex color. */
    let chr = max - min;
    let hue = 0;
    let val = max;
    let sat = 0;

    if (val > 0) {
        /* Calculate Saturation only if Value isn't 0. */
        sat = chr / val;
        if (sat > 0) {
            if (r == max) {
                hue = 60 * (((g - min) - (b - min)) / chr);
                if (hue < 0) {
                    hue += 360;
                }
            } else if (g == max) {
                hue = 120 + 60 * (((b - min) - (r - min)) / chr);
            } else if (b == max) {
                hue = 240 + 60 * (((r - min) - (g - min)) / chr);
            }
        }
    }

    return hue;
}

export default {
    options: colors
        .sort(function (a, b) {
            if (a.color === '#000000') {
                return -1
            }
            if (b.color === '#000000') {
                return 1
            }

            let aHue = getHue(a.color);
            let bHue = getHue(b.color);

            return aHue - bHue;
        })
}