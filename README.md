# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://badge.fury.io/js/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bbmoz/pretty-web-console/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.em2hiij8p46d)

> Prettier logs in your browser console!

![example](/media/example.png)

## API

You can either pass a config or use the chaining api for your desired logs. For example,

### 1. Config

```javascript
pwc({
  color: 'blue',
  weight: 'bold',
  size: 'large',
  decorate: 'linethrough'
}).log('hello')
```

The keys are shorthands for their css counterparts. See **Available Styles**.

### 2. Chaining

```javascript
pwc().size('large').color('blue').weight('bold').bg('lightgreen').log('hello')
```

You can also do the above this way:

```javascript
pwc().large().blue().bold().bglightgreen().log('hello')
```

Notice `.size('large')` is `.large()` and `.color('blue')` is `.blue()`, etc. See **Available Styles** for more substitutions.

## Available Styles

Besides supporting raw css values, the following can be used for chaining, i.e. `.bg('red')` is the same as `.bgred()`. If using a config object instead, you can also use them as values, i.e. `decorate: 'line-through'` is the same as `decorate: 'linethrough'`.

1. color: [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names)
1. weight: `bold`, `lighter`, `bolder`
1. size: `small`, `medium`, `large`
1. decorate: `underline`, `overline`, `linethrough`
1. family: `arial`, `couriernew`, `georgia`, `timesnewroman`, `trebuchetms`, `verdana`, `serif`, `sansserif`, `monospace`, `cursive`, `fantasy`
1. style: `italic`, `oblique`
1. transform: `capitalize`, `uppercase`, `lowercase`
1. bg: `bgblue`, `bgred`, etc for [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names) prefixed with `bg`
1. shadow

## Log Levels

`.log()`, `.warn()`, `.error()`, `.info()`, and `.debug()` are available.

## Custom Logger

By default, the logger used is the standard browser console. But, you may pass in your own logger if you want for any level.

For example, `pwc().blue().bold().underline().warn('hi', customWarnFn)` would pass the message and a css styles object as arguments to `customWarnFn`. The styles object for the example would look like this:

```javascript
{
  color: 'blue',
  'font-weight': 'bold',
  'text-decoration': 'underline'
}
```

[![NPM](https://nodei.co/npm/pretty-web-console.png?downloads=true)](https://www.npmjs.com/package/pretty-web-console)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
