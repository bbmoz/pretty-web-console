import Store from './Store'
import chainFns from './chainFns'
import readConfig from './readConfig'

function pwc (config) {
  const store = new Store()
  if (typeof config === 'object') {
    readConfig(store, config)
  }
  return chainFns(store)
}

export default pwc
