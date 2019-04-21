'use strict'

var arr = [[1, 2, 3], [400, 500, 600], '-']
var x = arr[1][1]

console.log(x) // 500 expected.

// notice 直接给Array 的 length 赋值或者通过索引赋值时超出索引范围，都会造成
// Array 对象的大小发生变化
//

var arr1 = [1, 2, 3.14, 'Hello', null, true]
console.log(arr1.length) // 6

// 1. 改变数组的length 属性
var arr2 = [1, 2, 3]
console.log(arr2.length) // 3
arr2.length = 6
console.log(arr2.length) // 6
console.log(arr2) // [1, 2, 3, <3 x empty items>]

// 2. 使用超出范围的索引赋值
var arr3 = ['A', 'B', 'C']
arr3[1] = 99
console.log(arr3) // ['A', 99, 'C']
arr3[5] = 'x'
console.log(arr3) // ['A', 99, 'C', <2 x empty items>, 'x']

// indexOf
var arr4 = [10, 20, '30', 'xyz']
arr4.indexOf(10) // 元素10的索引为0
arr4.indexOf(20) // 元素20的索引为1
arr4.indexOf(30) // 元素30的索引为-1 找不到
arr4.indexOf('30') // 元素'30'的索引为2

// slice 切片
var arr5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
arr5.slice(0, 3) // ['A', 'B', 'C']
arr5.slice(3) // ['D', 'E', 'F', 'G']

var arr5Copy = arr5.slice()
console.log(arr5Copy)
console.log(arr5Copy === arr5) // false
console.log(arr5Copy[0] === arr5[0]) // true

// push 和 pop 类似栈的操作
var arr6 = [1, 2]
arr6.push('A', 'B') // 返回数组的新长度 4
console.log(arr6) // [1, 2, 'A', 'B']
arr6.pop() // pop 返回 'B'
console.log(arr6) // [1, 2, 'A']
arr6.pop()
arr6.pop()
arr6.pop()
console.log(arr6) // []
arr6.pop() // 空数组 pop 操作不会报错, 返回undefined

// unshift 和 shift 类似队列的进队和出队
var arr7 = [1, 2]
arr7.unshift('A', 'B') // 返回数组的新长度 4
console.log(arr7) // ['A', 'B', 1, 2]
arr7.shift() // 'A'
console.log(arr7) // ['B', 1, 2]
arr7.shift()
arr7.shift()
arr7.shift()
console.log(arr7) // []
arr.shift() // 同样对一个空的数组进行shift 也不会报错， 返回 undefined

// sort 函数
var arr8 = ['B', 'C', 'A']
arr8.sort()
console.log(arr8) // ['A', 'B', 'C']

// reverse 函数： 将整个数组翻转
var arr9 = ['one', 'two', 'three']
arr9.reverse()
console.log(arr9) // ['three', 'two', 'one']

// splice 从指定索引开始删除若干元素并从该位置插入新的元素
var arr10 = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle']
// 从索引2 开始删除3个元素，然后再添加两个元素
arr10.splice(2, 3, 'Google', 'Facebook')
console.log(arr10) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除，不添加
arr10.splice(2, 2)
console.log(arr10) // ['Microsoft', 'Apple', 'Oracle']
// 只添加不删除
arr10.splice(2, 0, 'Google', 'Facebook')
console.log(arr10) // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// concat 把当前的Array 和另一个Array 连接起来，并返回一个新的Array
var arr11 = ['A', 'B', 'C']
var added = arr.concat([1, 2, 3])
console.log(added) // ['A', 'B', 'C', 1, 2, 3]
console.log(arr11) // ['A', 'B', 'C']

// join 把当前Array 的每个元素都用指定的字符串连接起来，然后返回该字符串
var arr12 = ['A', 'B', 'C', 1, 2, 3]
console.log(arr12.join('-')) // 'A-B-C-1-2-3'
