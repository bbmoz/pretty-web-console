import { allNames, nameMap, colors, weights, sizes, decorates, families, styles, transforms, bgs } from './namedStyleVals'
import * as appender from './appendStyles'
import loggers from './loggers'

function chainFns (store) {
  store.styleFns = Object.assign({
    color, weight, bg, size, decorate, family, style, transform, shadow, padding, margin, css
  }, loggers(store))

  populateStyleFnsWithShorthands(allNames, store)

  function color (val) {
    appender.appendColor(store, val)
    return store.styleFns
  }

  function weight (val) {
    appender.appendWeight(store, val)
    return store.styleFns
  }

  function bg (val) {
    appender.appendBg(store, val)
    return store.styleFns
  }

  function size (val) {
    appender.appendSize(store, val)
    return store.styleFns
  }

  function decorate (val) {
    appender.appendDecorate(store, val)
    return store.styleFns
  }

  function family (val) {
    appender.appendFamily(store, val)
    return store.styleFns
  }

  function style (val) {
    appender.appendStyle(store, val)
    return store.styleFns
  }

  function transform (val) {
    appender.appendTransform(store, val)
    return store.styleFns
  }

  function shadow (val) {
    appender.appendShadow(store, val)
    return store.styleFns
  }

  function padding (val) {
    appender.appendPadding(store, val)
    return store.styleFns
  }

  function margin (val) {
    appender.appendMargin(store, val)
    return store.styleFns
  }

  function css (val) {
    appender.appendCss(store, val)
    return store.styleFns
  }

  return store.styleFns
}

function populateStyleFnsWithShorthands (allNames, store) {
  allNames.forEach(styleVal => {
    store.styleFns[styleVal] = () => {
      const val = styleVal in nameMap ? nameMap[styleVal] : styleVal

      if (colors.includes(styleVal)) {
        appender.appendColor(store, val)

      } else if (weights.includes(styleVal)) {
        appender.appendWeight(store, val)

      } else if (sizes.includes(styleVal)) {
        appender.appendSize(store, val)

      } else if (decorates.includes(styleVal)) {
        appender.appendDecorate(store, val)

      } else if (families.includes(styleVal)) {
        appender.appendFamily(store, val)

      } else if (styles.includes(styleVal)) {
        appender.appendStyle(store, val)

      } else if (transforms.includes(styleVal)) {
        appender.appendTransform(store, val)

      } else if (bgs.includes(styleVal)) {
        appender.appendBg(store, val)
      }

      return store.styleFns
    }
  })
}

export default chainFns
