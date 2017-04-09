import pwc from './../../dist/pretty-web-console'

pwc().blue().log('i am blue')

pwc().family('georgia').bold().log('i am bold and georgian')

pwc().color('blue').weight('bold').log('i am blue and bold')

pwc().bg('lightblue').log('i have a light blue background')

pwc().large().log('i am large')

pwc().linethrough().log('i have a line through me')

pwc().fantasy().large().log('i am large and fantastic')

pwc().italic().size(20).log('i am italic and 20px')

pwc({
  color: 'red',
  size: 14,
  bg: 'lavender'
}).log('i am red, 14px, and have a lavender background')
