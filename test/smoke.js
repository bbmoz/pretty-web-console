import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc({...}).log("hi"): config', t => {
  t.plan(1)
  const logSpy = spy()
  pwc({
    color: 'red',
    size: 10,
    decorate: 'linethrough',
    weight: 'bold',
    family: 'cursive',
    style: 'italic'
  }).log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;font-size:10px;text-decoration:line-through;font-weight:bold;font-family:cursive;font-style:italic;'))
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

test('pwc().large().color("#444").bold().bg("green").underline().cursive().italic().log("hi"): combo text', t => {
  t.plan(1)
  const logSpy = spy()
  pwc().large().color('#444').bold().bg('green').underline().cursive().italic().log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;color:#444;font-weight:bold;background-color:green;text-decoration:underline;font-family:cursive;font-style:italic;'))
})
