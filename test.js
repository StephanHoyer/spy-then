var spyThen = require('./')()

describe('spy-then', function() {
  it('should call cb if all spies have been called', function(done) {
    var state = 0
    createSpy = spyThen(function() {
      done(state === 2 ? undefined : 'should be called after all spies have been called')
    })
    var a = createSpy()
    var b = createSpy()
    var c = createSpy()
    a()
    state = 1
    b()
    state = 2
    c()
    state = 2
  })
  it('should not call cb if all spies have been called', function(done) {
    createSpy = spyThen(function() {
      done('should not be called')
    })
    var a = createSpy()
    var b = createSpy()
    var c = createSpy()
    a()
    b()
    setTimeout(done, 10)
  })
})
