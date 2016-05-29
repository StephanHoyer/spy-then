[![Build Status](https://travis-ci.org/StephanHoyer/spy-then.svg)](https://travis-ci.org/StephanHoyer/spy-then)
[![rethink.js](https://img.shields.io/badge/rethink-js-yellow.svg)](https://github.com/rethinkjs/manifest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Dependency Status](https://david-dm.org/StephanHoyer/sock-channels.svg)](https://david-dm.org/StephanHoyer/sock-channels)

# spy-then
Simple async spy helper

## Usage

```javascript
var spyThen = require('spy-then')(optionalOptions)

var makeSpy = spyThen(function() {
  console.log('ready')
}, optionalOptions)

spyA = makeSpy('foo')
spyB = makeSpy('bar')

spyB('foo') // -> nothing happens
spyB('bar') // -> console.log('ready') will be called
```

## Options

You can either initialize the library with options or you can give them to each
spy-maker individually.

Possible options are

* `options.argCheck`: should be a function that gets two arguments, first one is
  the expected argument, second one is the actual. You can feed those to your
  assertions library
* `options.allowMultipleCalls`: should be true, if multiple calls of a spy are
  allowed

## Todo/Ideas

### Expect callCount

```javascript
spyA = makeSpy({
  args: ['argOffirstCall', 'arfOfSecondCall'],
  minCallCount: 2,
  maxCallCount: 4
})
```

## more options

* `minCallCount`
* `maxCallCount`

