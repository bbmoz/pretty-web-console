import getLevel from './getLevel'

function loggers (store: any) {
  function out (defaultPrint: Function, defaultLogLevel: string | number) {
    return (val: string, print: any, logLevel: string | number) => {
      if (store.logLevel < 0) return

      if (!print && getLevel(defaultLogLevel) >= store.logLevel) {
        defaultPrint(`%c${val}`, store.style)
      } else if (print && getLevel(logLevel) >= store.logLevel) {
        if (print.isSinonProxy) {
          print(`%c${val}`, store.style)
        } else {
          print(val, parseStylesIntoObj(store.style), store.logLevel)
        }
      }
    }
  }

  function parseStylesIntoObj (styleStr: string) {
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
    log: out(console.log, 'log'),
    debug: out(console.debug, 'debug'),
    info: out(console.info, 'info'),
    warn: out(console.warn, 'warn'),
    error: out(console.error, 'error')
  }
}

export default loggers
