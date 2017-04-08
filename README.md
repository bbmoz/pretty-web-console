# Pretty Web Console [![npm version](https://badge.fury.io/js/pretty-web-console.svg)](https://badge.fury.io/js/pretty-web-console) [![Build Status](https://travis-ci.org/bbmoz/pretty-web-console.svg)](https://travis-ci.org/bbmoz/pretty-web-console)

> Prettier logs in your browser console!

![v0.0.5](/media/v0.0.5.png)

## API

You can use either chaining or config passing for your desired logs.

### Chaining

```javascript
pwc().size('large').color('blue').weight('bold').decorate('underline').bg('lightgreen').log('i have a light green background, i am large and blue, and i am underlined')
```

You can also do the above this way:

```javascript
pwc().large().blue().bold().underline().bg('lightgreen').log('i have a light green background, i am large and blue, and i am underlined')
```

Notice `.size('large')` is `.large()` and `.color('blue')` is `.blue()`, etc. See the **Available Style Names** section below.

### Config Passing

```javascript
pwc({
  color: 'blue',
  weight: 'bold',
  decorate: 'line-through'
}).log('i am blue, bold, and have a line through me')
```

## Available Style Names
Beside supporting raw values, the following names are supported for chaining, i.e. `.blue()` and `.bold()` rather than `.color('blue')` and `.weight('bold')`, respectively.

1. color: [all web colors](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names)
1. weight: `normal`, `bold`, `lighter`, `bolder`
1. size: `small`, `medium`, `large`
1. decorate: `underline`, `overline`, `line-through`, `none`
1. bg: *names not supported*
