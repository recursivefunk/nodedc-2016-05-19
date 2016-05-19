
'use strict'

const test = require('tape')
const component = require('stampit')
const Barking = require('../behaviors/barking')
const Walking = require('../behaviors/walking')
const Purring = require('../behaviors/purring')
const Eating = require('../behaviors/eating')
const Flying = require('../behaviors/flying')
const Name = require('../features/name')

test('it works', (t) => {
  // Each animal is created simply by composing various behaviors and features
  // No hierarchy required
  const Dog = component().compose(Walking, Barking, Eating, Name)
  const Cat = component().compose(Walking, Eating, Purring)
  const Unicorn = component().compose(Walking, Eating, Flying)

  // Create each animal by passing information to their constructor functions
  const dog = Dog.create({ name: 'ajax', eats: 'dog food' })
  const cat = Cat.create({ eats:'cat food' })
  const unicorn = Unicorn.create({ name:'ginger', eats:'grass' })

  // Each animal has it's own state
  dog.walkForward(5)
  cat.walkBackwards(2)

  t.equal(dog.getSteps(), 5, `we've successfully taken 5 steps forward`)
  t.equal(cat.getSteps(), -2, `we've successfully taken two steps back`)

  t.equal(dog.getName(), 'ajax', `our dog's name is ajax`)
  t.notOk(cat.getName, `the cat component doesn't have a getName function`)

  console.log('\n')
  dog.eat()
  cat.eat()

  console.log('\n')
  dog.bark()
  cat.purr()

  // An implicit component will be used!
  console.log('\n')
  unicorn.takeOff()

  t.end()
})
