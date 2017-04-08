import { appendColor, appendWeight, appendBg, appendSize, appendDecorate } from './append-styles'

function readConfig (store, config) {
  const styleNames = Object.keys(config)
  styleNames.forEach(styleName => {
    const styleVal = config[styleName]
    switch (styleName) {
      case 'color':
        appendColor(store, styleVal)
        break
      case 'weight':
        appendWeight(store, styleVal)
        break
      case 'bg':
        appendBg(store, styleVal)
        break
      case 'size':
        appendSize(store, styleVal)
        break
      case 'decorate':
        appendDecorate(store, styleVal)
        break
    }
  })
}

export default readConfig
