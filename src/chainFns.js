import { allNames, nameMap, colors, weights, sizes, decorates, families, styles, transforms, bgs } from './namedStyleVals'
import { appendColor, appendWeight, appendBg, appendSize, appendDecorate, appendFamily, appendStyle, appendTransform, appendShadow } from './appendStyles'
import loggers from './loggers'

function chainFns (store) {
  const { log, warn, error, info, debug } = loggers(store)

  store.styleFns = {
    log, warn, error, info, debug, color, weight, bg, size, decorate, family, style, transform, shadow
  }

  function color (val) {
    appendColor(store, val)
    return store.styleFns
  }

  function weight (val) {
    appendWeight(store, val)
    return store.styleFns
  }

  function bg (val) {
    appendBg(store, val)
    return store.styleFns
  }

  function size (val) {
    appendSize(store, val)
    return store.styleFns
  }

  function decorate (val) {
    appendDecorate(store, val)
    return store.styleFns
  }

  function family (val) {
    appendFamily(store, val)
    return store.styleFns
  }

  function style (val) {
    appendStyle(store, val)
    return store.styleFns
  }

  function transform (val) {
    appendTransform(store, val)
    return store.styleFns
  }

  function shadow (val) {
    appendShadow(store, val)
    return store.styleFns
  }

  allNames.forEach(styleVal => {
    store.styleFns[styleVal] = function () {
      const val = styleVal in nameMap ? nameMap[styleVal] : styleVal
      if (colors.includes(styleVal)) {
        appendColor(store, val)
      } else if (weights.includes(styleVal)) {
        appendWeight(store, val)
      } else if (sizes.includes(styleVal)) {
        appendSize(store, val)
      } else if (decorates.includes(styleVal)) {
        appendDecorate(store, val)
      } else if (families.includes(styleVal)) {
        appendFamily(store, val)
      } else if (styles.includes(styleVal)) {
        appendStyle(store, val)
      } else if (transforms.includes(styleVal)) {
        appendTransform(store, val)
      } else if (bgs.includes(styleVal)) {
        appendBg(store, val)
      }
      return store.styleFns
    }
  })

  return store.styleFns
}

export default chainFns
