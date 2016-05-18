

'use strict'

const component = require('stampit')

module.exports = component()
  .init(function({ instance, stamp  }) {
    // We can attach methods to the stamp's prototype by
    // referencing stamp.fixed.methods
    const _methods = stamp.fixed.methods
    // Ensure we don't overwrite this method
    if (!_methods.getName) {
      _methods.getName = () => instance.name
    }
  })

