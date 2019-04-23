'use strict'

/**
 * 在Javascript 的世界里面，一切都是对象
 */

// 1. 对象的类型: 使用typeof 来获取对象的类型，返回一个字符串
console.log(typeof 123) // 'number'
console.log(typeof NaN) // 'number'
console.log(typeof 'str') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof Math.abs) // 'function'
console.log(typeof null) // 'object'
console.log(typeof []) // 'object'
console.log(typeof {}) // 'oject'

// 2. 包装对象
// 类似Java， 在Javascript中，number、boolean和string(java中没有)都有包装对象，包装对象用new 创建
let n = new Number(123)
let b = new Boolean(true)
let s = new String('str')
// 虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但是它们的类型已经变为了object

console.log(typeof new Number(123)) // 'object'
console.log(new Number(123) === 123) // false
console.log(typeof new Boolean(true))
console.log(new Boolean(true) === true) // false
console.log(typeof new String('str'))
console.log(new String('str') === 'str')
// 最好不要使用包装类型，一般情况下，我们只会使用Number() Boolean() 和 String() 方法，把任何类型的数据转换为 number , boolean 和 string类型
let n1 = Number('123')
console.log(typeof n1) // ‘string'
let b1 = Boolean('true')
console.log(typeof b1) // 'boolean'
let b2 = Boolean('false') // true! ’false' 字符创转换结果为true!, 因为它是非空字符串
console.log(b2)
let b3 = Boolean('') // false
console.log(b3)
let s1 = String(123.45)
console.log(s1 + 'type: ' + typeof s1)

// Javascript 中类型的使用总结
// 1. 不要使用new Number()、new Boolean()、new String() 创建包装对象
// 2. 用parseInt() 或 parseFloat() 来转换任意类型到number
// 3. 用String() 来转换任意类型到string, 或者直接调用某个对象的toString()方法
// 4. 通常不必把任意类型转换为boolean 再判断，因为可以直接写 if (myVar) {...}
// 5. typeof 操作符可以判断出number, boolean , string, function, 和 undefined
// 6. 判断Array要用Array.isArray(arr)
// 7. 判断null 请使用 myVar === null
// 8. 判断某个全局变量是否存在用 typeof window.myVar === 'undefined'
// 9. 函数内部判断某个变量是否存在用typeof myVar === 'undefined'
//
// null 和 undefined没有toString()方法

// 123.toString() // SyntaxError 需要通过以下特殊处理
// console.log(123..toString())
console.log((123).toString())
