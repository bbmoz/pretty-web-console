import pwc from './../../dist/pretty-web-console'

pwc().turquoise().info('i am turquoise and an info message')

pwc().family('georgia').bold().padding('25px').log('i am padded, bold, and georgian')

pwc().capitalize().linethrough().log('i am capitalized and have a line through me')

pwc().fantasy().large().uppercase().log('i am large, fantastic, and uppercase')

pwc().italic().size(20).shadow('4px 4px 5px lightgreen').log('i am italic, 20px, and have a shadow')

pwc({
  color: 'orange',
  size: 14,
  bg: 'lavender'
}).log('i am orange, 14px, and have a lavender background')

pwc().color('blue').weight('bold').warn('i am blue, bold, and a warning')

pwc().darkmagenta().bgazure().error('i am dark magenta, an error, and have an azure background')
