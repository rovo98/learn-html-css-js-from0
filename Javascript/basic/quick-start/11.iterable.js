'use strict'

/*
 * ES6 引入的iterable 类型 Array , Map 和 Set 都属于iterable类型
 *
 * 遍历Array 和对象我们可以属性来遍历，for in 方式，但是Map 和Set 就无法使用属性方式遍历
 *
 * 因此iterable 类型 使用新的 for ... of 方式来遍历
 *
 * author rovo98
 *
 */

// 测试是否支持 for .. of 方式
let a = [1, 2, 3]
for (let x of a) {
  console.log(x)
}
console.log('浏览器支持for .. of ')

// for .. of 循环遍历集合
//
a = ['A', 'B', 'C']
let s = new Set(['A', 'B', 'C'])
let m = new Map([[1, 'x'], [2, 'y'], [3, 'z']])
// 遍历 Array
for (let x of a) {
  console.log(x)
}
// 遍历Set
for (let x of s) {
  console.log(x)
}
// 遍历Map
for (let x of m) {
  console.log(x[0] + '=' + x[1])
}

// for in 和 for .. of 的区别：
// for in 只是遍历了对象的属性而已
let testArr = ['A', 'B', 'C']
testArr.name = 'Hello'
for (let x in testArr) {
  console.log(x) // '0', '1', '2' , 'name'
}

// for .. in 循环会把name属性包括在内，但是Array 的length属性却不包括在内
// for ... of 修复了这个问题，它只循环集合本身的元素
//
let testArr1 = ['A', 'B', 'C']
testArr1.name = 'Hello'
for (let x of testArr1) {
  console.log(x) // 'A', 'B', 'C'
}

// 更好的方式是直接使用iterable 内置的forEach 方法，它接受一个函数，每次迭代就自动回调该函数。
//
let testArr2 = ['A', 'B', 'C']
testArr2.forEach((element, index, array) => {
  // element: 指向当前元素的值
  // index: 指向当前元索引
  // array: 指向Array 对象本身
  console.log(element + ', index = ' + index)
})
