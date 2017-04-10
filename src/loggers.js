function loggers (store) {
  function out (defaultPrint) {
    return (val, print) => {
      if (print) {
        print(`%c${val}`, store.style)
      } else {
        defaultPrint(`%c${val}`, store.style)
      }
      store.style = ''
    }
  }

  return {
    log: out(console.log),
    warn: out(console.warn),
    error: out(console.error),
    info: out(console.info)
  }
}

export default loggers
