import test from 'ava'
import { spy } from 'sinon'
import pwc from './../dist/pretty-web-console'

test('pwc({...}).log("hi"): config', t => {
  t.plan(1)
  pwc({
    color: 'red',
    size: 10,
    decorate: 'linethrough',
    bg: 'gray',
    weight: 'bold',
    family: 'cursive',
    style: 'italic',
    transform: 'capitalize',
    shadow: '2px 2px 1px #aaa'
  }).log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'color:red;font-size:10px;text-decoration:line-through;background-color:gray;font-weight:bold;font-family:cursive;font-style:italic;text-transform:capitalize;text-shadow:2px 2px 1px #aaa;'))
})

test('pwc()...log("hi"): chaining', t => {
  t.plan(1)
  pwc()
    .large()
    .orange()
    .bold()
    .bggreen()
    .underline()
    .cursive()
    .italic()
    .lowercase()
    .shadow('2px 2px 1px #aaa')
    .log('hi', logSpy)
  t.true(logSpy.calledWith('%chi', 'font-size:large;color:orange;font-weight:bold;background-color:green;text-decoration:underline;font-family:cursive;font-style:italic;text-transform:lowercase;text-shadow:2px 2px 1px #aaa;'))
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

let logSpy
test.beforeEach('setup', () => {
  logSpy = spy()
})
