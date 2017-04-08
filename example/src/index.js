import pwc from './../../dist/pretty-web-console'

pwc().blue().log('i am blue')

pwc().bold().log('i am bold')

pwc().color('blue').weight('bold').log('i am blue and bold')

pwc().bg('lightblue').log('i have a light blue background')

pwc().large().log('i am large')

pwc().underline().log('i am underlined')

pwc().decorate('underline').size('large').bg('lightgreen').color('blue').bold().log('i have a light green background, i am large and blue, and i am underlined')

pwc({
  color: 'red',
  size: 14,
  bg: 'yellow'
}).log('i am red, 14px, and have a yellow background')
