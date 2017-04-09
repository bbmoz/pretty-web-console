# Pretty Web Console

[![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://badge.fury.io/js/pretty-web-console)
[![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)
[![Code Climate](https://codeclimate.com/github/bbmoz/pretty-web-console/badges/gpa.svg)](https://codeclimate.com/github/bbmoz/pretty-web-console)

> Prettier logs in your browser console!

![v0.0.5](/media/v0.0.5.png)

## API

You can use either pass a config or utilize the chaining api for your desired logs.

### 1. Config

```javascript
pwc({
  color: 'blue',
  weight: 'bold',
  decorate: 'line-through'
}).log('i am blue, bold, and have a line through me')
```

### 2. Chaining

```javascript
pwc().size('large').color('blue').weight('bold').decorate('underline').bg('lightgreen').log('i have a light green background, i am large and blue, and i am underlined')
```

You can also do the above this way:

```javascript
pwc().large().blue().bold().underline().bg('lightgreen').log('i have a light green background, i am large and blue, and i am underlined')
```

Notice `.size('large')` is `.large()` and `.color('blue')` is `.blue()`, etc. See the **Available Styles** section below.

## Available Styles

Beside supporting raw values, the following names are supported for chaining. If you are using a config object instead of chaining, you may  use these names as values.

1. color: [all web colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names)
1. weight: `normal`, `bold`, `lighter`, `bolder`
1. size: `small`, `medium`, `large`
1. decorate: `underline`, `overline`, `linethrough`, `none`
1. family: `arial`, `couriernew`, `georgia`, `timesnewroman`, `trebuchetms`, `verdana`, `serif`, `sansserif`, `monospace`, `cursive`, `fantasy`
1. bg
