# Pretty Web Console [![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://badge.fury.io/js/pretty-web-console) [![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)

> Prettier logs in your browser console!

```javascript
import pwc from 'pretty-web-console'

pwc.blue().log('i am blue')

pwc.bold().log('i am bold')

pwc.color('blue').weight('bold').log('i am blue and bold')

pwc.bg('lightblue').log('i have a light blue background')

pwc.large().log('i am large')

pwc.weight('large').bg('lightgreen').color('blue').bold().log('i have a light green background, and i am large and blue')
```
