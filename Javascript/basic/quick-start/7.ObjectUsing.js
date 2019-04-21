'use strict'

// simple object using demo
var obj = {}

obj.name = 'rovo98'
obj.age = 22
obj.printMsg = () => {
  console.log(obj.name + ' is ' + obj.age + ' years old!')
}

obj.printMsg()

// constructor function
function User (name, age) {
  this.name = name
  this.age = age
  this.printMsg = () => {
    console.log(this.name + ' is ' + this.age + ' years old!')
  }
}

var user = new User('testUser', 21)
user.printMsg()
