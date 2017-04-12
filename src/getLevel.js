import { LOG, DEBUG, INFO, WARN, ERROR, NONE } from './levels'

function getLevel (val) {
  let level = LOG

  if (typeof val === 'string') {
    switch (val.toLowerCase()) {
      case 'debug':
        level = DEBUG; break
      case 'info':
        level = INFO; break
      case 'warn':
        level = WARN; break
      case 'error':
        level = ERROR; break
      case 'none':
        level = NONE; break
    }
  } else {
    const eVal = +val
    if (eVal >= NONE && eVal <= ERROR) {
      level = eVal
    }
  }

  return level
}

export default getLevel
