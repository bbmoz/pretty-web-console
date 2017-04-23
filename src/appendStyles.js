function appendColor (store: any, val: string) {
  store.appendStyle(`color:${val};`)
}

function appendWeight (store: any, val: string) {
  store.appendStyle(`font-weight:${val};`)
}

function appendBg (store: any, val: string) {
  store.appendStyle(`background-color:${val};`)
}

function appendSize (store: any, val: string | number) {
  if (!+val) {
    store.appendStyle(`font-size:${val};`)
  } else {
    store.appendStyle(`font-size:${val}px;`)
  }
}

function appendDecorate (store: any, val: string) {
  store.appendStyle(`text-decoration:${val};`)
}

function appendFamily (store: any, val: string) {
  store.appendStyle(`font-family:${val};`)
}

function appendStyle (store: any, val: string) {
  store.appendStyle(`font-style:${val};`)
}

function appendTransform (store: any, val: string) {
  store.appendStyle(`text-transform:${val};`)
}

function appendShadow (store: any, val: string) {
  store.appendStyle(`text-shadow:${val};`)
}

function appendPadding (store: any, val: string) {
  store.appendStyle(`padding:${val};`)
}

function appendMargin (store: any, val: string) {
  store.appendStyle(`margin:${val};`)
}

function appendCss (store: any, val: string) {
  let style = val.replace(/\s/g, '')
  if (style.slice(-1) !== ';') {
    style += ';'
  }
  store.appendStyle(style)
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
  appendPadding,
  appendMargin,
  appendCss
}
