import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc.level = "debug"|"log"|0', t => {
  t.plan(5)

  let logLevel = 'log'
  pwc().log(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'debug'
  pwc().debug(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'info'
  pwc().info(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'warn'
  pwc().warn(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'error'
  pwc().error(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))
})

test('pwc.level = "info"|1', t => {
  t.plan(5)
  pwc.level = 'info'

  let logLevel = 'log'
  pwc().log(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'debug'
  pwc().debug(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'info'
  pwc().info(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'warn'
  pwc().warn(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'error'
  pwc().error(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))
})

test('pwc.level = "warn"|2', t => {
  t.plan(5)
  pwc.level = 'warn'

  let logLevel = 'log'
  pwc().log(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'debug'
  pwc().debug(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'info'
  pwc().info(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'warn'
  pwc().warn(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'error'
  pwc().error(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))
})

test('pwc.level = "error"|3', t => {
  t.plan(5)
  pwc.level = 'error'

  let logLevel = 'log'
  pwc().log(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'debug'
  pwc().debug(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'info'
  pwc().info(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'warn'
  pwc().warn(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'error'
  pwc().error(logLevel, logSpy, logLevel)
  t.true(logSpy.calledWith(`%c${logLevel}`))
})

test('pwc.level = "none"|-1', t => {
  t.plan(5)
  pwc.level = 'none'

  let logLevel = 'log'
  pwc().log(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'debug'
  pwc().debug(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'info'
  pwc().info(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'warn'
  pwc().warn(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))

  logLevel = 'error'
  pwc().error(logLevel, logSpy, logLevel)
  t.false(logSpy.calledWith(`%c${logLevel}`))
})

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
  pwc.level = 0
})
