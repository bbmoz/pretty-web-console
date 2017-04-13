import pwc from './../../dist/pretty-web-console'

pwc()
  .size(100)
  .fantasy()
  .bold()
  .turquoise()
  .bgpeachpuff()
  .padding('15px 50px 2px')
  .shadow('0px 2px hsl(2.13, 50%, 50%), 1px 3px hsl(4.27, 100%, 50%), 2px 4px hsl(8.75, 100%, 50%), 3px 5px hsl(17.5, 100%, 50%), 4px 6px hsl(25, 100%, 50%), 5px 7px hsl(50, 100%, 50%), 6px 8px hsl(100, 100%, 50%), 7px 9px hsl(600, 20%, 80%)')
  .log('PWC')

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
