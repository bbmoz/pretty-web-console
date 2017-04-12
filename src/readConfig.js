import { nameMap } from './namedStyleVals'
import * as appender from './appendStyles'

function readConfig (store, config) {
  const styleNames = Object.keys(config)

  styleNames.forEach(styleName => {
    const styleVal = config[styleName]
    const val = styleVal in nameMap ? nameMap[styleVal] : styleVal

    switch (styleName) {
      case 'color':
        appender.appendColor(store, val); break

      case 'weight':
        appender.appendWeight(store, val); break

      case 'bg':
        appender.appendBg(store, val); break

      case 'size':
        appender.appendSize(store, val); break

      case 'decorate':
        appender.appendDecorate(store, val); break

      case 'family':
        appender.appendFamily(store, val); break

      case 'style':
        appender.appendStyle(store, val); break

      case 'transform':
        appender.appendTransform(store, val); break

      case 'shadow':
        appender.appendShadow(store, val); break

      case 'padding':
        appender.appendPadding(store, val); break

      case 'margin':
        appender.appendMargin(store, val); break

      case 'css':
        appender.appendCss(store, val); break
    }
  })
}

export default readConfig
