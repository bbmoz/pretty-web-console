# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://www.npmjs.com/package/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bbmoz/pretty-web-console/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/bbmoz/pretty-web-console/releases)

> Bored of console.log? It's time to prettify it!

![example](/media/example.png)

## Get Started

```bash
$ npm install --save pretty-web-console
```

## Usage

You can use the rich **chaining** api and/or pass a **config** for your desired logs. It's easy!

### Chaining

```javascript
import pwc from 'pretty-web-console'

// configure your stylized loggers
const loggerA = pwc().size('large').weight('bold')
const loggerB = pwc().large().bold()

// log anything!
loggerA.log('hi')
loggerB.log('hi')

// you can even extend your loggers
loggerA.fantasy().underline().info('i am back')
```

### Config

```javascript
// pass in a config object
const logger = pwc({
  color: 'blue',
  weight: 'bold',
  size: 'large',
  decorate: 'linethrough'
})

// log it!
logger.log('hi')

// feel free to mix-and-match between different methods
pwc({ color: 'green' }).size('large').bold().log('hi again')
```

## Properties

All properies below are available for chaining. But, only those marked with an asterisk `*` are supported by the config. These also accept css values, while the properties without an `*` don't take any arguments i.e. `blue()` and `bold()`.

* `blue`, `red`, `turquoise`, `aquamarine`, etc for [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) lowercased
* color*
* `bold`, `lighter`, `bolder`
* weight*
* `small`, `medium`, `large`
* size*
* `underline`, `overline`, `linethrough`
* decorate*
* `arial`, `couriernew`, `georgia`, `timesnewroman`, `trebuchetms`, `verdana`, `serif`, `sansserif`, `monospace`, `cursive`, `fantasy`
* family*
* `italic`, `oblique`
* style*
* `capitalize`, `uppercase`, `lowercase`
* transform*
* `bgblue`, `bgred`, `bgturquoise`, `bgaquamarine` etc for [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) lowercased and prefixed with `bg`
* bg*
* shadow*
* padding*
* margin*
* css*

### Examples

```javascript
pwc().turquoise().bgred().info('turquoise info msg with red background')

pwc().decorate('uppercase').cursive().log('uppercased cursive msg')

pwc({ shadow: '4px 4px 5px green' }).large().error('large error msg with green shadow')

pwc({ weight: 'bold', color: '#00f' }).size(20).log('bold, blue, and 20px msg')
```

Have fun with making your logs pretty!

## Log Levels

* `.log()`
* `.warn()`
* `.error()`
* `.info()`
* `.debug()`

## Custom Logger

By default, the logger used is the standard browser console. But, you may pass in your own logger if you want.

For example, let's say you have a logger function named `customWarnFn`. You just need to pass it to the log function as the second argument i.e. `pwc().blue().bold().underline().warn('hi', customWarnFn)`. This passes the message and a css styles object as arguments to your custom logger. The styles object for the example would look like this:

```javascript
{
  color: 'blue',
  'font-weight': 'bold',
  'text-decoration': 'underline'
}
```

Enjoy!

[![NPM](https://nodei.co/npm/pretty-web-console.png?compact=true)](https://www.npmjs.com/package/pretty-web-console)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/bbmoz/pretty-web-console)
