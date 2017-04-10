import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc().log("hi"): plain text', t => {
  t.plan(2)
  const out = pwc().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('.warn("hi"): warn text', t => {
  t.plan(2)
  const out = pwc().warn('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

test('.error("hi"): error text', t => {
  t.plan(2)
  const out = pwc().error('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(out, undefined)
})

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
})
