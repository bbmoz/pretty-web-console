function appendColor (store, val) {
  store.appendStyle(`color:${val};`)
}

function appendWeight (store, val) {
  store.appendStyle(`font-weight:${val};`)
}

function appendBg (store, val) {
  store.appendStyle(`background-color:${val};`)
}

function appendSize (store, val) {
  if (!+val) {
    store.appendStyle(`font-size:${val};`)
  } else {
    store.appendStyle(`font-size:${val}px;`)
  }
}

function appendDecorate (store, val) {
  store.appendStyle(`text-decoration:${val};`)
}

function appendFamily (store, val) {
  store.appendStyle(`font-family:${val};`)
}

function appendStyle (store, val) {
  store.appendStyle(`font-style:${val};`)
}

function appendTransform (store, val) {
  store.appendStyle(`text-transform:${val};`)
}

function appendShadow (store, val) {
  store.appendStyle(`text-shadow:${val};`)
}

function appendPadding (store, val) {
  store.appendStyle(`padding:${val};`)
}

export {
  appendColor,
  appendWeight,
  appendBg,
  appendSize,
  appendDecorate,
  appendFamily,
  appendStyle,
  appendTransform,
  appendShadow,
  appendPadding
}
