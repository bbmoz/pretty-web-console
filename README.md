# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://www.npmjs.com/package/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bbmoz/pretty-web-console/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/bbmoz/pretty-web-console/releases)

![pwc](/media/pwc.png)

> Bored of console.log? It's time to prettify it!

## Get Started

```bash
$ npm install --save pretty-web-console
```

You can then `require` or `import` it to get started.

*Although not recommended, a standalone lib is also provided, so you can choose to load it in a `<script>` tag. You can find it in your node_modules directory as `pretty-web-console.lib.js`.*

## Table of Contents
1. [Usage](#usage)
1. [Properties](#properties)
1. [Examples](#examples)
1. [Log Levels](#log-levels)
1. [Custom Logger](#custom-logger)

## Usage

Writing pretty logs is easy with the rich [**chaining**](#chaining) api and/or [**config**](#config) object.

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

 To go a step further, you can show logs for just certain [log levels](#log-levels). You can even connect your own [custom logger](#custom-logger) instead of the browser's default one if you want.

## Properties

![example](/media/example.png)

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

## Examples

```javascript
pwc().turquoise().bgred().info('turquoise info msg with red background')

pwc().decorate('uppercase').cursive().log('uppercased cursive msg')

pwc({ shadow: '4px 4px 5px green' }).large().error('large error msg with green shadow')

pwc({ weight: 'bold', color: '#00f' }).size(20).log('bold, blue, and 20px msg')

// 'pwc' logo image!!
pwc()
  .size(100)
  .fantasy()
  .bold()
  .turquoise()
  .bgpeachpuff()
  .padding('15px 50px 2px')
  .shadow('0px 2px hsl(2.13, 50%, 50%), 1px 3px hsl(4.27, 100%, 50%), 2px 4px hsl(8.75, 100%, 50%), 3px 5px hsl(17.5, 100%, 50%), 4px 6px hsl(25, 100%, 50%), 5px 7px hsl(50, 100%, 50%), 6px 8px hsl(100, 100%, 50%), 7px 9px hsl(600, 20%, 80%)')
  .log('PWC')
```

## Log Levels

* `.log()`
* `.debug()`
* `.info()`
* `.warn()`
* `.error()`

You can configure `pwc` to output logs for certain levels. By default, the log level is a `0` which outputs all logs. If you want to change this, you can set the log level on `pwc`.

```javascript
pwc.level = 0   // 'log', 'debug' => show all logs

pwc.level = 1   // 'info' => show info, warn, and error logs

pwc.level = 2   // 'warn' => show warn and error logs

pwc.level = 3   // 'error' => show only error logs

pwc.level = -1  // 'none' => show no logs
```

## Custom Logger

By default, the logger is the standard browser console's. But, you may pass in your own logger if you want.

For example, let's say you have a logger function named `customWarnFn`. You just need to pass it to the log function as the second argument i.e. `pwc().blue().bold().underline().warn('hi', customWarnFn)`. This passes the **message**, a **css styles object**, and the **log level** as arguments to your custom logger.

The styles object has key-value pairs of real css properties, like this:

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
