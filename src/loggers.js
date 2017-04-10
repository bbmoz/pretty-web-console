function loggers (store) {
  return {
    log, warn, error, info
  }

  function log (val, log = console.log) {
    log(`%c${val}`, store.style)
    store.style = ''
  }

  function warn (val, warn = console.warn) {
    warn(`%c${val}`, store.style)
    store.style = ''
  }

  function error (val, error = console.error) {
    error(`%c${val}`, store.style)
    store.style = ''
  }

  function info (val, info = console.info) {
    info(`%c${val}`, store.style)
    store.style = ''
  }
}

export default loggers
