import getLevel from './getLevel'

class Store {
  constructor () {
    this.style = ''
    this.styleFns = {}
    this.logLevel = 0
  }

  appendStyle (newStyle) {
    this.style += newStyle
  }

  set level (val) {
    this.logLevel = getLevel(val)
  }
}

export default Store
