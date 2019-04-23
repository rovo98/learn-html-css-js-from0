'use strict'
/**
 * closure 闭包
 *
 * author rovo98
 */

// 函数作为返回值： 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回
// 实现一个Array求和，通常情况下的求和函数定义
function sum (arr) {
  return arr.reduce((x, y) => x + y)
}
console.log(sum([1, 2, 3, 4, 5])) // 15

// 如果不需要立刻求和，而是在后面的代码中，根据需要再计算的话，就应该返回求和的函数
function lazySum (arr) {
  let sum = function () {
    return arr.reduce((x, y) => x + y)
  }
  return sum
}
let f = lazySum([1, 2, 3, 4, 5]) // function sum()
console.log(f)
// 当调用f时，才真正计算求和的结果
console.log(f())
// 在上面给出的例子中，lazySum中定义了sum函数，内部函数sum可以引用外部函数lazySum的参数局部变量，当lazySum返回sum时，相关参数和变量
// 都保存在返回的函数中，这种称为“闭包(Closure)
//
// 当我们调用lazySum函数时，每次调用都会返回一个新的函数，即使传入相同的参数
let f1 = lazySum([1, 2, 3, 4, 5])
let f2 = lazySum([1, 2, 3, 4, 5])
console.log(f1 === f2) // false -> f1 和 f2 的调用结果互不影响

// 闭包： 返回的函数在其定义的内部引用了局部变量arr, 所以当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以
// 闭包用起来简单，实现起来可不容易
// NOTICE : 返回的函数并没有立刻执行，而是直到调用了f()才执行
function count () {
  let arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push(function () {
      return i * i
    })
  }
  return arr
}
let results = count()
f1 = results[0]
f2 = results[1]
let f3 = results[2]
console.log(f1()) // 16
console.log(f2()) // 16
console.log(f3()) // 16
// 每次循环都创建了一个新的函数，然后，把创建的3个函数都添加到一个Array中的返回
// 我们可能认为f1(), f2() 和 f3() 的返回结果是1, 4, 9, 但是实际结果都是16
// 因为在返回的函数引用了变量i , 但它并非立即执行，等到3个函数都返回时，引用的变量的值已经变成了 4

// NOTICE: 返回闭包时，返回函数不要引用任何循环变量，或者后续会发生变化的变量
// 如果一定要引用循环变量， 再创建一个立即函数，使变量的当前值能够立即绑定到函数中

function count1 () {
  let arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push((n => () => n * n)(i))
  }
  return arr
}
results = count1()
f1 = results[0]
f2 = results[1]
f3 = results[2]
console.log(f1())
console.log(f2())
console.log(f3())

// 闭包不只是返回一个函数然后延后执行
// 它拥有非常强大的功能，例如， 在面向对象的程序设计语言中，比如java和c++,要在对象中封装一个私有变量，可以用private 修饰一个成员变量
// 在没有class机制，只有函数的语言中，借助闭包，同样可以封装一个私有变量

// constructor function
function createCounter (initial) {
  let x = initial || 0
  return {
    inc: () => {
      x += 1
      return x
    }
  }
}
// 用起来是这样的
let c1 = createCounter()
console.log(c1.inc()) // 1
console.log(c1.inc()) // 2
console.log(c1.inc()) // 3
let c2 = createCounter(10)
console.log(c2.inc()) // 11
console.log(c2.inc()) // 12
console.log(c2.inc()) // 13
// 闭包就是携带了状态的函数，携带了局部变量，并且从外部代码无法访问到局部变量，实现了数据的封装
// 闭包还可以把多参数的函数变成单参数的函数，例如
function makePow (n) {
  return x => Math.pow(x, n)
}
// 创建两个函数
let pow2 = makePow(2)
let pow3 = makePow(3)
console.log(pow2(5)) // 25
console.log(pow3(2)) // 8
