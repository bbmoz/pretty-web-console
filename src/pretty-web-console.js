import Store from './Store'
import chainFns from './chain-fns'

const store = new Store()
const pwc = chainFns(store)

export default pwc
