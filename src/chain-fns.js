import { colors, weights, sizes, decorates } from './named-style-vals'

function chainFns (store) {
  store.styleFns = {
    log, color, weight, bg, size, decorate
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
    if (!+val) {
      store.appendStyle(`font-size:${val};`)
    } else {
      store.appendStyle(`font-size:${val}px;`)
    }
    return store.styleFns
  }

  function decorate (val) {
    store.appendStyle(`text-decoration:${val};`)
    return store.styleFns
  }

  const namedStyleVals = colors.concat(weights).concat(sizes).concat(decorates)
  namedStyleVals.forEach(styleVal => {
    store.styleFns[styleVal] = function () {
      if (colors.includes(styleVal)) {
        store.appendStyle(`color:${styleVal};`)
      } else if (weights.includes(styleVal)) {
        store.appendStyle(`font-weight:${styleVal};`)
      } else if (sizes.includes(styleVal)) {
        store.appendStyle(`font-size:${styleVal};`)
      } else if (decorates.includes(styleVal)) {
        store.appendStyle(`text-decoration:${styleVal};`)
      }
      return store.styleFns
    }
  })

  return store.styleFns
}

export default chainFns
