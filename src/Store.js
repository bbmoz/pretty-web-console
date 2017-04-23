import getLevel from './getLevel'

class Store {
  style: string
  styleFns: any
  logLevel: number

  constructor () {
    this.style = ''
    this.styleFns = {}
    this.logLevel = 0
  }

  appendStyle (newStyle: string) {
    this.style += newStyle
  }

  set level (val: string | number) {
    this.logLevel = getLevel(val)
  }
}

export default Store
