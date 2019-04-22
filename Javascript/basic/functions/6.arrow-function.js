'use strict'
/*
 * ES6 标准新增的函数类型: 与java和python中的lambda表达式非常相似
 */

// this 的问题
//
// 箭头函数看上去像是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：
//      箭头函数内部的this是词法作用域的， 由上下文确定
//
//  之前的由于javascript函数对this的绑定错误问题，我们是通过var that = this 的 hack 写法解决的

let obj = {
  birth: 1998,
  getAge: function () {
    let b = this.birth // 1998
    let that = this
    let fn = function () {
      // return new Date().getFullYear() - this.birth // this 指向 window 或 undefined(strict mode)
      return new Date().getFullYear() - that.birth
    }
    return fn
  }
}
console.log(obj.getAge()()) // undefined
// 使用箭头函数可以完全修复这个问题
let objNew = {
  birth: 1998,
  getAge: function () {
    let b = this.birth // 1998
    let fn = () => new Date().getFullYear() - this.birth // this 指向 obj对象
    return fn
  }
}
console.log(objNew.getAge()())
// 由于this在箭头函数中已经按照词法作用域绑定了，所以，用call() 或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略
let obj1 = {
  birth: 1998,
  getAge: function (year) {
    let b = this.birth // 1998
    let fn = y => y - this.birth
    return fn.call({ birth: 2000 }, year) // 传入的{birth: 2000} 对象将被忽略
  }
}
console.log(obj1.getAge(2019)) // 21

// 利用箭头函数简化排序等
console.log([10, 2, 20, 1].sort((x, y) => x - y))
console.log([10, 2, 20, 1].sort((x, y) => y - x))
