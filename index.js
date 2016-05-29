function identity (thing) {
  return thing
}

module.exports = function (globalOptions) {
  globalOptions = globalOptions || {}
  return function spyThen (then, localOptions) {
    localOptions = localOptions || globalOptions
    var called = []
    function checkDone () {
      if (called.every(identity)) {
        then()
      }
    }
    return function () {
      var pos = called.length
      called.push(false)
      var expectedArgs = Array.from(arguments)
      return function () {
        if (!localOptions.allowMultipleCalls && called[pos]) {
          throw new Error('spy called twice')
        }
        if (expectedArgs.length > 0 || arguments > 0) {
          localOptions.argCheck(Array.from(arguments), expectedArgs)
        }
        called[pos] = true
        checkDone()
      }
    }
  }
}
