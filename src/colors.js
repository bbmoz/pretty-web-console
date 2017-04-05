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
  'normal', 'bold', 'lighter', 'bolder'
]

const allStyleValues = colors.concat(weights)

// fns
const styleFns = allStyleValues.map(styleValue => {
  return {
    [styleValue]: function (text) {
      let styleType
      if (colors.includes(styleValue)) {
        styleType = 'color'
      } else if (weights.includes(styleValue)) {
        styleType = 'font-weight'
      }
      let style = `${styleType}: ${styleValue};`

      if (typeof this === 'function') {
        style += (new this()).style
      }
      if (text !== undefined) {
        console.log(`%c${text}`, style)
      }
      console.log(style)
      this.style = style
    }
  }
})

// map
const styleMap = {}
styleFns.forEach(styleAfn => {
  const styleA = styleAfn[Object.keys(styleAfn)[0]]
  styleFns.forEach(styleBfn => {
    const styleB = styleBfn[Object.keys(styleBfn)[0]]
    styleA[styleB.name] = styleB
  })
  styleMap[styleA.name] = styleA
})

module.exports = styleMap
