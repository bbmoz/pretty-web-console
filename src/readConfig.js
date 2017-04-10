import { nameMap } from './namedStyleVals'
import { appendColor, appendWeight, appendBg, appendSize, appendDecorate, appendFamily, appendStyle, appendTransform, appendShadow, appendPadding, appendMargin } from './appendStyles'

function readConfig (store, config) {
  const styleNames = Object.keys(config)
  styleNames.forEach(styleName => {
    const styleVal = config[styleName]
    const val = styleVal in nameMap ? nameMap[styleVal] : styleVal
    switch (styleName) {
      case 'color':
        appendColor(store, val)
        break
      case 'weight':
        appendWeight(store, val)
        break
      case 'bg':
        appendBg(store, val)
        break
      case 'size':
        appendSize(store, val)
        break
      case 'decorate':
        appendDecorate(store, val)
        break
      case 'family':
        appendFamily(store, val)
        break
      case 'style':
        appendStyle(store, val)
        break
      case 'transform':
        appendTransform(store, val)
        break
      case 'shadow':
        appendShadow(store, val)
        break
      case 'padding':
        appendPadding(store, val)
        break
      case 'margin':
        appendMargin(store, val)
        break
    }
  })
}

export default readConfig
