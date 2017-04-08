import Store from './Store'
import chainFns from './chain-fns'
import readConfig from './read-config'

function pwc (config) {
  const store = new Store()
  if (typeof config === 'object') {
    readConfig(store, config)
  }
  return chainFns(store)
}

export default pwc
