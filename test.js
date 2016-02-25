var expect = require('chai').expect
  , overwrite = require('./')

describe('overwrite', function() {

  it('should copy values', function() {
    var from = { a: 1, b: 2 }, to = {}
    expect(overwrite(to)(from)).to.equal(to)
    expect(from).to.eql({ a: 1, b: 2 })
    expect(from).to.eql(to)
  })

  it('should override values', function() {
    var from = { a: 1, b: 2 }, to = { a: 3 }
    overwrite(to)(from)
    expect(to).to.eql({ a: 1, b: 2 })
  })

})