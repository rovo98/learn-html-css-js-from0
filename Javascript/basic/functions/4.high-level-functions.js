'use strict'

/**
 * javascript 中常用的高阶函数 map/reduce filter 和 sort
 *
 *
 * author : rovo98
 */

// map / reduce
// map 即映射，我们将某一个规则(函数)应用到集合中的每个元素中

function pow (x) {
  return x * x
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.map(pow)
console.log(result)
// 高阶函数事实上只是把运算规则抽象了，上面的函数，效果我们同样可以通过循环处理的方式来实现
let result1 = []
for (let a of arr) {
  result1.push(pow(a))
}
console.log(result1)

// 但是使用高阶函数，我们可以计算任意复杂的函数
console.log(arr.map(String)) // 将数组中的所有数字转成字符串

// reduce 函数必须接受两个参数，reduce() 把结果继续和序列中的下一个元素做累积计算
// 效果就是： [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
//
let arr1 = [1, 3, 5, 7, 9]
console.log(arr1.reduce((x, y) => { return x + y })) // 求和

// 利用reduce 求积也是如此
function product (arr) {
  return arr.reduce((x, y) => { return x * y })
}
// 简单验证
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 &&
    product([99, 88, 77, 66]) === 44274384) {
  console.log('测试通过')
} else {
  console.log('测试失败')
}

// 把[1, 3, 5, 7, 9] 变成整数13579
let n = [1, 3, 5, 7, 9]
console.log(n.reduce((x, y) => { return x * 10 + y })) // 13579

// parseInt navie implementation
function myParseInt (str) {
  let nums = str.split('').map(Number)
  return nums.reduce((x, y) => { return x * 10 + y })
}
function string2int (str) {
  return +str
}
// 测试 myParseInt
console.log(myParseInt('13579'))
console.log(string2int('9999'))
// normalize： 将英文名字规范化，首字母大写，其他小写

function normalize (arr) {
  return arr.map((x) => { return x[0].toUpperCase() + x.substring(1).toLowerCase() })
}
// test the normalize function
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
  console.log('normalize 测试通过')
} else {
  console.log('normalize 测试失败')
}
