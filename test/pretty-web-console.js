import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc().log("hi"): plain text', t => {
  t.plan(2)
  const styleFns = pwc().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(styleFns, undefined)
})

test('pwc().color("red").log("hi"): red text', t => {
  t.plan(1)
  pwc().color('red').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc().red().log("hi"): red text', t => {
  t.plan(1)
  pwc().red().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc().weight("bold").log("hi"): bold text', t => {
  t.plan(1)
  pwc().weight('bold').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc().size(20).log("hi"): 20px text', t => {
  t.plan(1)
  pwc().size(20).log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:20px;'))
})

test('pwc().large().log("hi"): large text', t => {
  t.plan(1)
  pwc().large().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().bold().log("hi"): bold text', t => {
  t.plan(1)
  pwc().bold().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc().size("large").log("hi"): large text', t => {
  t.plan(1)
  pwc().size('large').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().large().log("hi"): large text', t => {
  t.plan(1)
  pwc().large().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().bg("blue").log("hi"): text with blue background', t => {
  t.plan(1)
  pwc().bg('blue').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'background-color:blue;'))
})

test('pwc().bgblue().log("hi"): text with blue background', t => {
  t.plan(1)
  pwc().bgblue().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'background-color:blue;'))
})

test('pwc().decorate("underline").log("hi"): text with underline', t => {
  t.plan(1)
  pwc().decorate('underline').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-decoration:underline;'))
})

test('pwc().linethrough().log("hi"): text with line through', t => {
  t.plan(1)
  pwc().linethrough().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-decoration:line-through;'))
})

test('pwc().trebuchetms().log("hi"): text with trebuchet ms font family', t => {
  t.plan(1)
  pwc().trebuchetms().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-family:trebuchet ms;'))
})

test('pwc().family("arial").log("hi"): text with arial font family', t => {
  t.plan(1)
  pwc().family('arial').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-family:arial;'))
})

test('pwc().italic().log("hi"): italic text', t => {
  t.plan(1)
  pwc().italic().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-style:italic;'))
})

test('pwc().style("italic").log("hi"): italic text', t => {
  t.plan(1)
  pwc().style('italic').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-style:italic;'))
})

test('pwc().capitalize().log("hi"): capitalized text', t => {
  t.plan(1)
  pwc().capitalize().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-transform:capitalize;'))
})

test('pwc().transform("capitalize"): capitalized text', t => {
  t.plan(1)
  pwc().transform('capitalize').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-transform:capitalize;'))
})

test('pwc().shadow("4px 4px 5px red"): text with drop shadow', t => {
  t.plan(1)
  pwc().shadow('4px 4px 5px red').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-shadow:4px 4px 5px red;'))
})

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
})
