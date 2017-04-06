import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc.log("hi"): plain text', t => {
  t.plan(2)
  const logSpy = spy()
  const styleFns = pwc.log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(typeof styleFns, 'object')
})

test('pwc.log("hi").done(): plain text with completion', t => {
  t.plan(2)
  const logSpy = spy()
  const styleFns = pwc.log('hi', logSpy).done()
  t.true(logSpy.calledWith('%chi', ''))
  t.is(styleFns, undefined)
})

test('pwc.color("red").log("hi"): red text', t=> {
  t.plan(1)
  const logSpy = spy()
  pwc.color('red').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc.red().log("hi"): red text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.red().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc.weight("bold").log("hi"): bold text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.weight('bold').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc.bold().log("hi"): bold text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.bold().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc.size("large").log("hi"): large text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.size('large').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc.large().log("hi"): large text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.large().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc.bg("blue").log("hi"): text with blue background', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.bg('blue').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'background-color:blue;'))
})

test('pwc.color("#444").bold().bg("green").log("hi"): gray bold text with green background', t => {
  t.plan(1)
  const logSpy = spy()
  pwc.color("#444").bold().bg("green").log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:#444;font-weight:bold;background-color:green;'))
})

test.beforeEach(() => {
  pwc.done()
})
