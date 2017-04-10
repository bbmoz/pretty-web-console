import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc().log("hi"): plain text', t => {
  t.plan(2)
  const out = pwc().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('pwc().warn("hi"): warn text', t => {
  t.plan(2)
  const out = pwc().warn('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('pwc().error("hi"): error text', t => {
  t.plan(2)
  const out = pwc().error('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('pwc().info("hi"): info text', t => {
  t.plan(2)
  const out = pwc().info('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('pwc().blue().underline().log("hi", customLog): text with customLog', t => {
  t.plan(2)
  const customLog = function (text, styles) {
    t.is(text, 'hi')
    t.deepEqual(styles, {
      color: 'blue',
      'text-decoration': 'underline'
    })
  }
  pwc().blue().underline().log('hi', customLog)
})

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
})
