'use strict'

// 1. 获取字符串长度
let s = 'Hello, world!'
console.log(s.length) // 13

// 2. 获取指定位置字符串，类似Array的下标索引

console.log(s[0]) // 'H'
console.log(s[6]) // ' '
console.log(s[7]) // 'w'
console.log(s[12]) // '!'
console.log(s[13]) // 'undefined 超出索引范围不会报错，返回undefined'

// 3. 字符串不可变 imutable
let s1 = 'Test'
s[0] = 'X'
console.log(s1) // 'Test'

// 4. 常用方法, 调用方法不会改变字符串本身内容，而是返回一个新的字符串

// 把字符串全部变成大写
console.log(s.toUpperCase())
// 把字符串全部变成小写
console.log(s.toLowerCase())
// 搜索指定字符串出现的位置
let s2 = 'hello, world'
console.log(s2.indexOf('world')) // return 7
console.log(s2.indexOf('World')) // return -1  没有找到指定的字符串

// 返回指定区间的子串
let s3 = 'hello, world'
console.log(s3.substring(0, 5)) // 从索引0开始到5（不包括5）返回'hello'
console.log(s3.substring(7)) // 返回'world'
