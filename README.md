# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://badge.fury.io/js/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bbmoz/pretty-web-console/blob/master/LICENSE)

> Prettier logs in your browser console!

![v0.0.7](/media/v0.0.7.png)

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

### 2. Chaining

```javascript
pwc().size('large').color('blue').weight('bold').bg('lightgreen').log('hello')
```

You can also do the above this way:

```javascript
pwc().large().blue().bold().bg('lightgreen').log('hello')
```

Notice `.size('large')` is `.large()` and `.color('blue')` is `.blue()`, etc. See the **Available Styles** section below.

## Available Styles

Besides supporting raw values, the following names can be used for chaining. If using a config object instead, you may use these names as values.

1. color: [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names)
1. weight: `normal`, `bold`, `lighter`, `bolder`
1. size: `small`, `medium`, `large`
1. decorate: `underline`, `overline`, `linethrough`, `none`
1. family: `arial`, `couriernew`, `georgia`, `timesnewroman`, `trebuchetms`, `verdana`, `serif`, `sansserif`, `monospace`, `cursive`, `fantasy`
1. style: `normal`, `italic`, `oblique`
1. bg

[![NPM](https://nodei.co/npm/pretty-web-console.png?downloads=true)](https://www.npmjs.com/package/pretty-web-console)
