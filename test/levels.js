import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc.level = "debug"|"log"|0', t => {
  t.plan(5)
  testLevel(t, 'true', 'log', logSpy)
  testLevel(t, 'true', 'debug', logSpy)
  testLevel(t, 'true', 'info', logSpy)
  testLevel(t, 'true', 'warn', logSpy)
  testLevel(t, 'true', 'error', logSpy)
})

test('pwc.level = "info"|1', t => {
  t.plan(5)
  pwc.level = 'info'
  testLevel(t, 'false', 'log', logSpy)
  testLevel(t, 'false', 'debug', logSpy)
  testLevel(t, 'true', 'info', logSpy)
  testLevel(t, 'true', 'warn', logSpy)
  testLevel(t, 'true', 'error', logSpy)
})

test('pwc.level = "warn"|2', t => {
  t.plan(5)
  pwc.level = 'warn'
  testLevel(t, 'false', 'log', logSpy)
  testLevel(t, 'false', 'debug', logSpy)
  testLevel(t, 'false', 'info', logSpy)
  testLevel(t, 'true', 'warn', logSpy)
  testLevel(t, 'true', 'error', logSpy)
})

test('pwc.level = "error"|3', t => {
  t.plan(5)
  pwc.level = 'error'
  testLevel(t, 'false', 'log', logSpy)
  testLevel(t, 'false', 'debug', logSpy)
  testLevel(t, 'false', 'info', logSpy)
  testLevel(t, 'false', 'warn', logSpy)
  testLevel(t, 'true', 'error', logSpy)
})

test('pwc.level = "none"|-1', t => {
  t.plan(5)
  pwc.level = 'none'
  testLevel(t, 'false', 'log', logSpy)
  testLevel(t, 'false', 'debug', logSpy)
  testLevel(t, 'false', 'info', logSpy)
  testLevel(t, 'false', 'warn', logSpy)
  testLevel(t, 'false', 'error', logSpy)
})

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
  pwc.level = 0
})

function testLevel (t, assertKey, logLevel, logSpy) {
  pwc()[logLevel](logLevel, logSpy, logLevel)
  t[assertKey](logSpy.calledWith(`%c${logLevel}`))
}
