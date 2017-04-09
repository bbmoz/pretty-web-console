import { nameMap, colors, weights, sizes, decorates, families } from './named-style-vals'
import { appendColor, appendWeight, appendBg, appendSize, appendDecorate, appendFamily } from './append-styles'

function chainFns (store) {
  store.styleFns = {
    log, color, weight, bg, size, decorate, family
  }

  function log (val, log = console.log) {
    log(`%c${val}`, store.style)
    store.style = ''
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

  const namedStyleVals = colors.concat(weights).concat(sizes).concat(decorates).concat(families)
  namedStyleVals.forEach(styleVal => {
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
      }
      return store.styleFns
    }
  })

  return store.styleFns
}

export default chainFns
