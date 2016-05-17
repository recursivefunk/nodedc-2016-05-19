
'use strict'

const component = require('stampit')

module.exports = component()
  .methods({
    bark() {
      console.log('woof!')
    }
  })
