'use strict'
/**
 * 在一个对象中绑定的函数，我们称它们为方法
 *
 * author rovo98
 */

let xiaoming = {
  name: '小明',
  birth: 1990,
  age: function () {
    let y = new Date().getFullYear()
    return y - this.birth
  }
}
console.log(xiaoming.age) // function xiaoming.age()
console.log(xiaoming.age())

function getAge () {
  let y = new Date().getFullYear()
  return y - this.birth // 这里this指向调用者
}
xiaoming.getAge = getAge
console.log(xiaoming.getAge())

/**
 * 单独调用getAge() 会返回NaN, 因为this的原因， 在strict 模式下，this指向undefined, 非strict 模式下，指向了window对象
 *
 */
let fn = xiaoming.age
// fn()// Uncaught TypeError: Cannot read property 'birth' of undefined.

let xiaoming1 = {
  name: '小明',
  brith: 1998,
  age: function () {
    let that = this
    function getAgeFromBirth () {
      let y = new Date().getFullYear()
      // return y - this.birth // 这时this又是指向了undefined, 因为this只在age方法中指向xiaoming1
      return y - that.birth // 这样就解决了问题，that 外层函数变量
    }
    return getAgeFromBirth()
  }
}
console.log(xiaoming1.age())
// 使用函数自带的apply 方法进行绑定，控制this的指向
// apply 方法接受两个参数，一个是this的指向，第二个是函数本身的参数

function getAge1 () {
  let y = new Date().getFullYear()
  return y - this.birth
}
let xiaoming2 = {
  name: '小明',
  birth: 1998,
  age: getAge1
}
console.log(xiaoming2.age())
console.log(getAge1.apply(xiaoming2, []))
// 与apply()类似的方法是call() ， 唯一的区别是:
// apply() 把参数打包成Array 再传入
// call() 把参数按顺序传入

// 比如调用Math.max(3, 5, 4), 分别调用apply() 和 call()实现如下

Math.max.apply(null, [3, 5, 4]) // 5
Math.max.call(null, 3, 4, 5) // 5

// 装饰器， 利用apply() 我们可以动态改变函数的行为
// 例如统计一下代码一共调用了多少次parseInt()方法，用自己的函数替换掉原来默认的parseInt()函数
// 非常像java等语言中的代理模式 Proxy

let count = 0
let oldParseInt = parseInt

window.parseInt = function () {
  count += 1
  return oldParseInt.apply(null, arguments) // 调用原函数
}
console.log(count)
