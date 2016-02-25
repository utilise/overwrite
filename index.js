var is = require('utilise.is')
  , keys = require('utilise.keys')
  , copy = require('utilise.copy')

module.exports = function extend(to){ 
  return function(from){
    is.obj(from) && 
      keys(from)
        .map(copy(from, to))
        
    return to
  }
}