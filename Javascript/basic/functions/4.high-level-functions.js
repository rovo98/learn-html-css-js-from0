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

// filter 函数： 用于将Array 中共的某些元素过滤掉，然后返回剩下的元素

// 例如在一个Array 中，删掉偶数，只保留奇数，可以这么写
let testArr1 = [1, 2, 3, 4, 5, 6, 9, 10, 15]
let r = testArr1.filter((x) => { return x % 2 !== 0 })
console.log('odd numbers in testArr1: ' + r) // [1, 3, 5, 9, 15]
// 把一个Array中的空字符串删掉，可以这么写
let testArr2 = ['A', '', 'B', null, undefined, 'C', '    ']
let r1 = testArr2.filter((s) => { return s && s.trim() })
console.log('not empty string in testArr2: ' + r1) // 'A', 'B', 'C'

// 关于filter 的回调函数: 它可以接受多个参数
let testArr3 = ['A', 'B', 'C']
let r2 = testArr3.filter((element, index, self) => {
  console.log(element) // 依次打印 'A', 'B', 'C'
  console.log(index) // 依次打印 0, 1, 2
  console.log(self) // self 就是 testArr3
  return true
})
console.log('testArr3 : ' + r2)
// 利用filter 可以巧妙的去除Array 的重复元素
let result2,
  testArr4 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry']
result2 = testArr4.filter((element, index, self) => {
  return self.indexOf(element) === index
})
console.log('duplicate elements removed: ' + result2)

// sort函数：它默认将所有元素先转换成String再进行排序，所以直接使用的话会出现无法理解的结果
// 例如：
let testArr5 = [10, 20, 1, 2]
console.log(testArr5.sort()) // [1, 10, 2, 20]
// 幸好sort() 也是一个高阶函数，我们可以这么写
console.log(testArr5.sort((x, y) => { return x - y })) // 顺序排序
console.log(testArr5.sort((x, y) => { return y - x })) // 倒序排序

// 默认情况下，对字符串的排序是以ASCII码的大小进行比较的，我们一般是忽略大小写，按照字母序排序
let testArr6 = ['Google', 'apple', 'Microsoft']
console.log(testArr6.sort((s1, s2) => {
  let x1 = s1.toUpperCase()
  let x2 = s2.toUpperCase()
  if (x1 < x2) {
    return -1
  } else if (x1 > x2) {
    return 1
  } else {
    return 0
  }
})) // 'apple', 'Google', 'Microsoft'

// sort 会直接对Array 进行修改，它的返回结果仍是当前的Array
let a1 = ['B', 'A', 'C']
let a2 = a1.sort()
console.log(a1 === a2) // true
