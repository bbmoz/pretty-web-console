import Store from './Store'
import chainFns from './chain-fns'

function pwc () {
  const store = new Store()
  return chainFns(store)
}

export default pwc
