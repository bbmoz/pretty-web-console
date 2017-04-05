# Extend Decorator [![npm version](https://badge.fury.io/js/extend-decorator.svg)](https://badge.fury.io/js/extend-decorator) [![Build Status](https://travis-ci.org/bbmoz/extend-decorator.svg)](https://travis-ci.org/bbmoz/extend-decorator)

> Extend using a decorator!

## Example

Given two classes *Hi* and *Boo*, extend *Hello*.

```javascript
// part 1a
class Hi {
  sayHi () {
    return 'hi'
  }
}
export default Hi
```

```javascript
// part 1b
class Boo {
  sayBoo () {
    return 'boo'
  }
}
export default Boo
```

```javascript
// part 2
import extend from 'extend-decorator'
import Hi from './Hi'
import Boo from './Boo'

@extend(Hi)
class Hello {
  constructor ($hello) {
    $hello.innerHTML = this.sayHi() // hello
  }
  sayHi () {
    return 'hello'
  }
}

@extend(Hi, Boo, true)
class HelloOverwrite {
  constructor ($helloOverwrite) {
    $helloOverwrite.innerHTML = `${this.sayHi()} and ${this.sayBoo()}` // hi and boo
  }
  sayHi () {
    return 'hello'
  }
}
```

If the last argument for `@extend()` is a boolean true, overwrite matching methods. To extend with more objects, just pass them as additional arguments i.e. `@extend(A, B, C)`.
