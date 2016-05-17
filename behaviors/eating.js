
'use strict'

const component = require('stampit')

module.exports = component()
  .init(function({ instance  }) {
    const {eats='nothing'} = instance
    this.eat = () => console.log(`Yum, ${eats}`)
  })
