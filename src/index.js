import Store from './Store'
import chainFns from './chainFns'
import readConfig from './readConfig'

function pwc (config) {
  const store = new Store()
  store.level = pwc.level
  if (typeof config === 'object') {
    readConfig(store, config)
  }
  return chainFns(store)
}

module.exports = pwc
