function readConfig (store, config) {
  const styleNames = Object.keys(config)
  styleNames.forEach(styleName => {
    const styleVal = config[styleName]
    switch (styleName) {
      case 'color':
        store.appendStyle(`color:${styleVal};`)
        break
      case 'weight':
        store.appendStyle(`font-weight:${styleVal};`)
        break
      case 'bg':
        store.appendStyle(`background-color:${styleVal};`)
        break
      case 'size':
        if (!+styleVal) {
          store.appendStyle(`font-size:${styleVal};`)
        } else {
          store.appendStyle(`font-size:${styleVal}px;`)
        }
        break
      case 'decorate':
        store.appendStyle(`text-decoration:${styleVal};`)
        break
    }
  })
}

export default readConfig
