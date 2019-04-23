'use strict'

/**
 * 生成器 类似于python 的生成器
 *
 * author rovo98
 */

// 首先genertor 的定义 是用 function* 定义的，函数体中可以用yield 返回多次，除了return 语句以外

function * foo (x) {
  yield x + 1
  yield x + 2
  return x + 3
}

// 斐波那契数列函数
function fib (max) {
  let a = 0,
    b = 1,
    arr = [0, 1]
  while (arr.length < max) {
    [a, b] = [b, a + b]
    arr.push(b)
  }
  return arr
}
console.log(fib(5)) // [0, 1, 1, 2, 3]

// 生成器方式
function * newFib (max) {
  let a = 0,
    b = 1,
    n = 0
  while (n < max) {
    yield a;
    [a, b] = [b, a + b]
    n++
  }
  return 'return value'
}

console.log(newFib(5)) // Object [Generator] {}
// 直接调用一个generator 和调用函数是不一样的，newFib(5)仅仅是创建了一个generator对象，还没有执行它
let f = newFib(5)
console.log(f.next()) // {value: 0, done: false}
console.log(f.next()) // {value: 1, done: false}
console.log(f.next()) // {value: 1, done: false}
console.log(f.next()) // {value: 2, done: false}
console.log(f.next()) // {value: 3, done: false}
console.log(f.next()) // {value: undefined, done: true}
// next() 方法会执行generator的代码，然后，每次遇到yield a; 就返回一个对象 {value: x, done: true/false}, 然后暂停。返回的value就是yield的返回值，
// done 表示这个generator 是否已经执行结束了，如果done为true，则value就是return的返回值
//
// NOTICE 因为generator 可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个
// generator就可以实现需要用面向对象才能实现的功能
//
let fib1 = {
  a: 0,
  b: 1,
  n: 0,
  max: 5,
  next: function () {
    let r = this.a,
      t = this.a + this.b
    this.a = this.b
    this.b = t
    if (this.n < this.max) {
      this.n++
      return r
    } else {
      return undefined
    }
  }
}
console.log(fib1.next()) // 0
console.log(fib1.next()) // 1
console.log(fib1.next()) // 1
console.log(fib1.next()) // 2
console.log(fib1.next()) // 3
console.log(fib1.next()) // undefined

// practice: 设计一个函数来生成自增的id
// 闭包方式 closure
function nextId () {
  let currentId = 0
  return () => {
    return currentId++
  }
}
let n = nextId()
console.log(n)
console.log(n()) // 0
console.log(n()) // 1
console.log(n()) // 2
// generator 方式
function * nextId1 () {
  let currentId = 0
  while (true) {
    yield currentId++
  }
}
let g = nextId1()
for (let i = 0; i < 3; i++) {
  console.log(g.next())
}
