
'use strict'

const component = require('stampit')
const Wings = require('../features/wings')

module.exports = component()
  .methods({
    takeOff() {
      console.log(`I'm otta here!`)
      this.flapWings()
    }
  })
  .compose(Wings)
