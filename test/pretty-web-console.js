import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc().log("hi"): plain text', t => {
  t.plan(2)
  const logSpy = spy()
  const styleFns = pwc().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', ''))
  t.is(styleFns, undefined)
})

test('pwc().color("red").log("hi"): red text', t=> {
  t.plan(1)
  const logSpy = spy()
  pwc().color('red').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc().red().log("hi"): red text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().red().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;'))
})

test('pwc().weight("bold").log("hi"): bold text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().weight('bold').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc().size(20).log("hi"): 20px text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().size(20).log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:20px;'))
})

test('pwc().large().log("hi"): large text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().large().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().bold().log("hi"): bold text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().bold().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-weight:bold;'))
})

test('pwc().size("large").log("hi"): large text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().size('large').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().large().log("hi"): large text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().large().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;'))
})

test('pwc().bg("blue").log("hi"): text with blue background', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().bg('blue').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'background-color:blue;'))
})

test('pwc().decorate("underline").log("hi"): text with underline', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().decorate('underline').log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-decoration:underline;'))
})

test('pwc().linethrough().log("hi"): text with line through', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().linethrough().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'text-decoration:line-through;'))
})

test('a=pwc().blue();b=pwc().green();a.log("hi");b.log("hi"): stateless', t => {
  t.plan(2)
  const logSpyA = spy()
  const logSpyB = spy()
  const a = pwc().blue()
  const b = pwc().green()
  a.log('hi', logSpyA)
  b.log('hi', logSpyB)
  t.true(logSpyA.calledWith('%chi', 'color:blue;'))
  t.true(logSpyB.calledWith('%chi', 'color:green;'))
})

test('pwc({color:"red",size:10,decorate:"linethrough"}).log("hi")', t => {
  t.plan(1)
  const logSpy = spy()
  pwc({
    color: 'red',
    size: 10,
    decorate: 'linethrough'
  }).log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;font-size:10px;text-decoration:line-through;'))
})

test('pwc().trebuchetms().log("hi"): text with trebuchet ms font family', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().trebuchetms().log("hi", logSpy)
  t.true(logSpy.calledWith('%chi', 'font-family:trebuchet ms;'))
})

test('pwc().family("arial").log("hi"): text with arial font family', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().family("arial").log("hi", logSpy)
  t.true(logSpy.calledWith('%chi', 'font-family:arial;'))
})

test('pwc().large().color("#444").bold().bg("green").underline().cursive().log("hi"): gray, bold, underlined, large, and cursive text with green background', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().large().color("#444").bold().bg("green").underline().cursive().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;color:#444;font-weight:bold;background-color:green;text-decoration:underline;font-family:cursive;'))
})
