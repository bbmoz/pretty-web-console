import { allNames, nameMap, colors, weights, sizes, decorates, families, styles, transforms, bgs } from './namedStyleVals'
import * as appender from './appendStyles'
import loggers from './loggers'

function chainFns (store: any) {
  store.styleFns = Object.assign({
    color, weight, bg, size, decorate, family, style, transform, shadow, padding, margin, css
  }, loggers(store))

  populateStyleFnsWithShorthands(allNames, store)

  function color (val: string) {
    appender.appendColor(store, val)
    return store.styleFns
  }

  function weight (val: string) {
    appender.appendWeight(store, val)
    return store.styleFns
  }

  function bg (val: string) {
    appender.appendBg(store, val)
    return store.styleFns
  }

  function size (val: string | number) {
    appender.appendSize(store, val)
    return store.styleFns
  }

  function decorate (val: string) {
    appender.appendDecorate(store, val)
    return store.styleFns
  }

  function family (val: string) {
    appender.appendFamily(store, val)
    return store.styleFns
  }

  function style (val: string) {
    appender.appendStyle(store, val)
    return store.styleFns
  }

  function transform (val: string) {
    appender.appendTransform(store, val)
    return store.styleFns
  }

  function shadow (val: string) {
    appender.appendShadow(store, val)
    return store.styleFns
  }

  function padding (val: string) {
    appender.appendPadding(store, val)
    return store.styleFns
  }

  function margin (val: string) {
    appender.appendMargin(store, val)
    return store.styleFns
  }

  function css (val: string) {
    appender.appendCss(store, val)
    return store.styleFns
  }

  return store.styleFns
}

function populateStyleFnsWithShorthands (allNames: Array<string>, store: any) {
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
