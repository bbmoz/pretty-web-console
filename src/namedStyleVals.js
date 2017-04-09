const colors = [
  'pink', 'lightpink', 'hotpink', 'deeppink', 'palevioletred', 'mediumvioletred',
  'lightsalmon', 'salmon', 'darksalmon', 'lightcoral', 'indianred', 'crimson', 'firebrick', 'darkred', 'red',
  'orangered', 'tomato', 'coral', 'darkorange', 'orange',
  'yellow', 'lightyellow', 'lemonchiffon', 'lightgoldenrodyellow', 'papayawhip', 'moccasin', 'peachpuff', 'palegoldenrod', 'khaki', 'darkkhaki', 'gold',
  'cornsilk', 'blanchedalmond', 'bisque', 'navajowhite', 'wheat', 'burlywood', 'tan', 'rosybrown', 'sandybrown', 'goldenrod', 'darkgoldenrod', 'peru', 'chocolate', 'saddlebrown', 'sienna', 'brown', 'maroon',
  'darkolivegreen', 'olive', 'olivedrab', 'yellowgreen', 'limegreen', 'lime', 'lawngreen', 'chartreuse', 'greenyellow', 'springgreen', 'mediumspringgreen', 'lightgreen', 'palegreen', 'darkseagreen', 'mediumaquamarine', 'mediumseagreen', 'seagreen', 'forestgreen', 'green', 'darkgreen',
  'aqua', 'cyan', 'lightcyan', 'paleturquoise', 'aquamarine', 'turquoise', 'mediumturquoise', 'darkturquoise', 'lightseagreen', 'cadetblue', 'darkcyan', 'teal',
  'lightsteelblue', 'powderblue', 'lightblue', 'skyblue', 'lightskyblue', 'deepskyblue', 'dodgerblue', 'cornflowerblue', 'steelblue', 'royalblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue',
  'lavender', 'thistle', 'plum', 'violet', 'orchid', 'fuchsia', 'magenta', 'mediumorchid', 'mediumpurple', 'blueviolet', 'darkviolet', 'darkorchid', 'darkmagenta', 'purple', 'indigo', 'darkslateblue', 'slateblue', 'mediumslateblue',
  'white', 'snow', 'honeydew', 'mintcream', 'azure', 'aliceblue', 'ghostwhite', 'whitesmoke', 'seashell', 'beige', 'oldlace', 'floralwhite', 'ivory', 'antiquewhite', 'linen', 'lavenderblush', 'mistyrose',
  'gainsboro', 'lightgray', 'silver', 'darkgray', 'gray', 'dimgray', 'lightslategray', 'slategray', 'darkslategray', 'black'
]

const weights = [
  'bold', 'lighter', 'bolder'
]

const sizes = [
  'small', 'medium', 'large'
]

const decorates = [
  'underline', 'overline', 'linethrough'
]

const families = [
  'arial', 'couriernew', 'georgia', 'timesnewroman', 'trebuchetms', 'verdana',
  'serif', 'sansserif', 'monospace', 'cursive', 'fantasy'
]

const styles = [
  'italic', 'oblique'
]

const transforms = [
  'capitalize', 'uppercase', 'lowercase'
]

const nameMap = {
  linethrough: 'line-through',
  couriernew: 'courier new',
  timesnewroman: 'times new roman',
  trebuchetms: 'trebuchet ms',
  sansserif: 'sans-serif'
}

const bgs = colors.map(color => {
  const bgColor = `bg${color}`
  nameMap[bgColor] = color
  return bgColor
})

const allNames = colors
  .concat(weights)
  .concat(sizes)
  .concat(decorates)
  .concat(families)
  .concat(styles)
  .concat(transforms)
  .concat(bgs)

export { allNames, nameMap, colors, weights, sizes, decorates, families, styles, transforms, bgs }
