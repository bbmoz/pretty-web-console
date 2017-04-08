import { colors, weights, sizes, decorates } from './named-style-vals'
import { appendColor, appendWeight, appendBg, appendSize, appendDecorate } from './append-styles'

function chainFns (store) {
  store.styleFns = {
    log, color, weight, bg, size, decorate
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

  const namedStyleVals = colors.concat(weights).concat(sizes).concat(decorates)
  namedStyleVals.forEach(styleVal => {
    store.styleFns[styleVal] = function () {
      if (colors.includes(styleVal)) {
        appendColor(store, styleVal)
      } else if (weights.includes(styleVal)) {
        appendWeight(store, styleVal)
      } else if (sizes.includes(styleVal)) {
        appendSize(store, styleVal)
      } else if (decorates.includes(styleVal)) {
        appendDecorate(store, styleVal)
      }
      return store.styleFns
    }
  })

  return store.styleFns
}

export default chainFns
