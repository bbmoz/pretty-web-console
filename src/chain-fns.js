import { colors, weights, sizes } from './named-style-vals'

function chainFns (store) {
  store.styleFns = {
    log, color, weight, bg, size, done
  }

  function log (val, log = console.log) {
    log(`%c${val}`, store.style)
    store.style = ''
  }

  function color (val) {
    store.appendStyle(`color:${val};`)
    return store.styleFns
  }

  function weight (val) {
    store.appendStyle(`font-weight:${val};`)
    return store.styleFns
  }

  function bg (val) {
    store.appendStyle(`background-color:${val};`)
    return store.styleFns
  }

  function size (val) {
    if (val.length === undefined) {
      store.appendStyle(`font-size:${val}px;`)
    } else {
      store.appendStyle(`font-size:${val};`)
    }
    return store.styleFns
  }

  const namedStyleVals = colors.concat(weights).concat(sizes)
  namedStyleVals.forEach(styleVal => {
    store.styleFns[styleVal] = function () {
      if (colors.includes(styleVal)) {
        store.appendStyle(`color:${styleVal};`)
      } else if (weights.includes(styleVal)) {
        store.appendStyle(`font-weight:${styleVal};`)
      } else if (sizes.includes(styleVal)) {
        store.appendStyle(`font-size:${styleVal};`)
      }
      return store.styleFns
    }
  })

  return store.styleFns
}

export default chainFns
