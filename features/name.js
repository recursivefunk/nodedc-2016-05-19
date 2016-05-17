

'use strict'

const component = require('stampit')

module.exports = component()
  .init(function({ instance  }) {
    this.getName = () => instance.name
  })

