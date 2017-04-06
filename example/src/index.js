import pwc from 'pretty-web-console'

pwc.blue().log('i am blue').done()

pwc.bold().log('i am bold').done()

pwc.color('blue').weight('bold').log('i am blue and bold').done()

pwc.bg('lightblue').log('i have a light blue background').done()

pwc.large().log('i am large').done()

pwc.large().bg('lightgreen').color('blue').bold().log('i have a light green background, and i am large and blue').done()

