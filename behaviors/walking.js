
'use strict'

const component = require('stampit')

module.exports = component()
  .init(function() {
    this.steps = 0
  })
  .methods({
    walkForward(numSteps) {
      this.steps += numSteps
    },
    walkBackwards(numSteps) {
      this.steps -= numSteps
    },
    getSteps() {
      return this.steps
    }
  })
