class Store {
  constructor () {
    this.style = ''
    this.styleFns = {}
  }

  appendStyle (newStyle) {
    this.style += newStyle
  }
}

export default Store
