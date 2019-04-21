'use strict'

/*
 * author rovo98
 */

// 1. 函数的定义

function abs (x) {
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}
/**
 * function: 指出这是一个函数
 * abs: 函数的名称
 * (x): 参数列表
 * { .. } 之间的代码是函数体可以包含若干语句，甚至可以没有任何语句
 *
 *
 * 函数在执行的时候一遇到return 时就会立即返回，如果没有return 语句，函数执行完毕也会返回结果，结果为undefined.
 * 函数实际上是一个函数对象，而函数名可以看做是一个指向函数的变量
 */
// 匿名函数定义和上述定义完全等价

const abs1 = (x) => {
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}
// 函数的调用
abs(10)
abs(-9)
abs1(10)
abs1(-9)

// 由于Javascript 允许传任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题
abs(10, 'balabala') // 10
// 传入的参数比定义的少也没有问题
abs() // NaN
// 此时abs(x) 函数的参数接收的是undefined, 计算结果为NaN
//
// 要避免收到undefined, 可以对参数进行检查
const abs2 = (x) => {
  if (typeof x !== 'number') {
    throw new Error('Not a number')
  }
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}

abs2(10)

// arguments ： Javascript 函数中的一个特殊的参数，只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数
// arguments 类似一个Array 但不是Array

function foo (x) {
  console.log('x = ' + x)
  for (let i = 0; i < arguments.length; i++) {
    console.log('arg ' + i + ' = ' + arguments[i])
  }
}

foo(10, 20, 30)
// 实际上 arguments 参数也常用于判断传入的参数的个数
// 接受2 ～ 3个参数，b是可选参数，如果只传入2个参数， b 默认为null
function foo1 (a, b, c) {
  if (arguments.length === 2) {
    // 实际拿到的参数是a 和 b, c  为undefined
    c = b
    b = null
  }
  // ...
}

// rest 参数
// 由于Javascript 函数允许接受任意个参数，于是我们就不得不用arguments来获取所有参数
function foo2 (a, b) {
  let i, rest = []
  if (arguments.length > 2) {
    for (i = 2; i < arguments.length; i++) {
      rest.push(arguments[i])
    }
  }
  console.log('a = ' + a)
  console.log('b = ' + b)
  console.log('rest = ' + rest)
}
// 通过rest 参数, 类似Java中的可变参数 会把剩余的参数转换成一个数组
// 上面的函数可以重新写为
function foo2New (a, b, ...rest) {
  console.log('a = ' + a)
  console.log('b = ' + b)
  console.log(rest)
}

// 小心return 语句，因为Javascript 引擎会在行尾自动添加 ';'
