# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://www.npmjs.com/package/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bbmoz/pretty-web-console/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/bbmoz/pretty-web-console/releases)

> Bored of console.log? It's time to prettify it!

![example](/media/example.png)

## Install

```bash
$ npm install --save pretty-web-console
```

## Usage

You can either pass a config or use chaining for your desired logs. See the **Available Styles** section for options.

### 1. Config

```javascript
import pwc from 'pretty-web-console'

const myLogger = pwc({
  color: 'blue',
  weight: 'bold',
  size: 'large',
  decorate: 'linethrough'
})

// now you can re-use your stylized logger
myLogger.log('hello')
```

### 2. Chaining

```javascript
const coolLogger = pwc().size('large').weight('bold').bg('lightgreen')
const twinCoolLogger = pwc().large().bold().bglightgreen()

// both output the same styled logs
coolLogger.log('hi')
twinCoolLogger.log('hi')

// you can also mix-and-match
pwc({ size: 'large' }).bold().bg('lightgreen').log('hi again')
```

## Available Styles

Everything to the right of the colon are used for shorthand chaining i.e. `.bold()` and `.cursive()`. Everything to the left are used as keys in chaining and configs i.e. `.weight('bold')` or `{weight: 'bold'}`. All keys support css values.

1. color: [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) lowercased
1. weight: `bold`, `lighter`, `bolder`
1. size: `small`, `medium`, `large`
1. decorate: `underline`, `overline`, `linethrough`
1. family: `arial`, `couriernew`, `georgia`, `timesnewroman`, `trebuchetms`, `verdana`, `serif`, `sansserif`, `monospace`, `cursive`, `fantasy`
1. style: `italic`, `oblique`
1. transform: `capitalize`, `uppercase`, `lowercase`
1. bg: `bgblue`, `bgred`, etc for [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) lowercased and prefixed with `bg`
1. shadow
1. padding
1. margin
1. css

### Examples

All of these accomplish the same thing:

```javascript
/* 1. config */
pwc({ bg: 'red' })
pwc({ bg: '#f00' })
pwc({ bg: 'rgb(255,0,0)' })

/* 2. chaining */
pwc().bg('red')
pwc().bg('#f00')
pwc().bg('rgb(255,0,0)')
pwc().bgred()
```

As shown above, any css value can be used, unless you are using the shorthand chaining api i.e. `.bgred()` which doesn't take any arguments.

## Log Levels

`.log()`, `.warn()`, `.error()`, `.info()`, and `.debug()` are supported.

## Custom Logger

By default, the logger used is the standard browser console. But, you may pass in your own logger if you want!

For example, `pwc().blue().bold().underline().warn('hi', customWarnFn)` would pass the message and a css styles object as arguments to `customWarnFn`. The styles object for the example would look like this:

```javascript
{
  color: 'blue',
  'font-weight': 'bold',
  'text-decoration': 'underline'
}
```

[![NPM](https://nodei.co/npm/pretty-web-console.png?compact=true)](https://www.npmjs.com/package/pretty-web-console)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/bbmoz/pretty-web-console)
