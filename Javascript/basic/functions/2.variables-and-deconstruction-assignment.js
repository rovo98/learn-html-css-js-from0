'use strict'
/*
 * author rovo98
 *
 * var 声明变量是有作用域的， 函数级别， 不同于 let， let 是代码块级别的
 *
 *
 * 这意味着：
 * 1. Javascript中的嵌套函数，内部函数可以访问外部函数的变量， 例如: 我们知道js编程其实是在window对象内的，全局变量和函数都是它的属性
 *     alert等
 * 2. 变量提升： var 声明的变量，javascript引擎扫描整个函数体语句后，会把所有变量声明提到函数的顶部
 *      （这意味着变量可以未遇到声明语句前使用， 只不过是undefined值）
 *
 * function foo () {
 *    var x = 'Hello, ' + y
 *    console.log(x)
 *    var y = 'Bob'
 * }
 * 等价于
 * function foo() {
 *    var y
 *    var x = 'Hello, ' + y // 'Hello, undefined'
 *    console.log(x)
 *    y = 'Bob'
 * }
 */

// 解构赋值 ： 类似python 同时为多个变量进行赋值

// 在使用解构赋值之前
let array = ['hello', 'Javascript', 'ES6']
let x = array[0]
let y = array[1]
let z = array[2]
console.log('x = ' + x + ', y = ' + y + ', z = ' + z)

// 使用解构赋值后
let [x1, y1, z1] = ['hello', 'Javascript', 'ES6']
console.log('x1 = ' + x1 + ', y1 = ' + y1 + ', z1 = ' + z1)

// 对数组元素进行解构赋值时， 多个变量要用[...]括起来
let [x2, [y2, z2]] = ['hello', ['Javascript', 'ES6']]
console.log('x2 = ' + x2 + ', y2 = ' + y2 + ', z2 = ' + z2)

// 解构赋值可以忽略某些元素
let [, , z3] = ['hello', 'Javascript', 'ES6']
console.log('z3 = ' + z3)

// 如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性
let person = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school'
}
let { name, age, passport } = person
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport)

// 对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的即可
let person1 = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address: {
    city: 'Beijing',
    street: 'No.1 Road',
    zipcode: '100001'
  }
}
let { name: name1, address: { city, zip } } = person1
console.log(name1) // 小明
console.log(city) // ‘Beijing'
console.log(zip) // undefined 因为属性zipcode 不是zip, notice: address 不是变量而是为了让city 和zip 获得嵌套的address对象的属性

let { name: name2, passport: id } = person
// 把passport 的属性赋值给id
// 使用的变量名和属性不一致时的处理方式
console.log(name2) // 小明
console.log(id) // G-12345678

// 解构赋值还可以使用默认赋值， 从而避免了不存在属性返回undefined的问题
let person2 = {
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678'
}
let { name: name3, single = true } = person
console.log(name3 + ' ' + single) // 小明 true
// 如果变量已经声明，再次用解构赋值的方式赋值时，正确写法也会报错，因为Javascript引擎把{当成了块来处理了，我们应该用()将赋值语句括起来
let a, b
({ a, b } = { name: '小明', a: 100, b: 200 })
console.log(a + ' ' + b)

// 使用场景
// 1. 交换变量
let testA = 1, testB = 2;
[testA, testB] = [testB, testA]
console.log(testA + ':' + testB)
// 2. 如果一个函数接受一个对象作为参数，那么，可以使用解构直接将属性绑定到变量中。
function buildDate ({ year, month, day, hour = 0, minute = 0, second = 0 }) {
  return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second)
}
console.log(buildDate({ year: 2019, month: 4, day: 21 }))
console.log(buildDate({ year: 2019, month: 4, day: 22, hour: 0, minute: 14 }))
