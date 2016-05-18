
'use strict'

const component = require('stampit')

module.exports = component()
  .init(function({ instance, stamp }) {
    const {eats='nothing'} = instance
    const _methods = stamp.fixed.methods

    if (!_methods.eat) {
      _methods.eat = () => console.log(`Yum, ${eats}`)
    }

  })
