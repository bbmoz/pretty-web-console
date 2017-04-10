function loggers (store) {
  function out (defaultPrint) {
    return (val, print) => {
      if (!print) {
        defaultPrint(`%c${val}`, store.style)
      } else if (print.isSinonProxy) {
        print(`%c${val}`, store.style)
      } else {
        print(val, parse(store.style))
      }
    }
  }

  function parse (styleStr) {
    const cssMap = {}
    const styles = styleStr.split(';')
    styles.slice(0, styles.length - 1)
      .forEach(style => {
        const pair = style.split(':')
        cssMap[pair[0]] = pair[1]
      })
    return cssMap
  }

  return {
    log: out(console.log),
    warn: out(console.warn),
    error: out(console.error),
    info: out(console.info)
  }
}

export default loggers
