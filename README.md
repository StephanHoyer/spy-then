[![Build Status](https://travis-ci.org/StephanHoyer/spy-then.svg)](https://travis-ci.org/StephanHoyer/spy-then)
[![rethink.js](https://img.shields.io/badge/rethink-js-yellow.svg)](https://github.com/rethinkjs/manifest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependency Status](https://david-dm.org/StephanHoyer/sock-channels.svg)](https://david-dm.org/StephanHoyer/sock-channels)

# spy-then
Simple async spy helper

## Usage

```javascript
var spyThen = require('spy-then')(options)

var makeSpy = spyThen(function() {
  console.log('ready')
})

spyA = makeSpy('foo')
spyB = makeSpy('bar')

spyB('foo') // -> nothing happens
spyB('bar') // -> done will be called
```

## Todo

### Expect callCount

```javascript
spyA = makeSpy({
  args: ['argOffirstCall', 'arfOfSecondCall'],
  minCallCount: 2,
  maxCallCount: 4
})
```

## options

* minCallCount
* maxCallCount

