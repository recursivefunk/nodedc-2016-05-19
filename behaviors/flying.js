
'use strict'

const component = require('stampit')
const Wings = require('../features/wings')

module.exports = component()
  .methods({
    takeOff() {
      this.flapWings()
    }
  })
  .compose(Wings)
