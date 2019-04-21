'use strict'

// Map 和 Set 是ES6引入的新特性
// JavaScript中的对象的键必须是字符串 {} ， 而实际上Number 或者其他类型也是可以的

// 测试是否支持Map 和 Set
let m = new Map()
let s = new Set()
console.log('你的浏览器支持Map和Set')

// Map 的使用
// Map 是一个键值对的结构，类似python中的dictionary 和 java 的Map
//
m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])
console.log(m.get('Michael')) // 95

m = new Map()
m.set('Adam', 67)
m.set('Bob', 59)
m.has('Adam') // true
m.delete('Adam')
m.get('Adam') // undefined

s = new Set([1, 2, 3, 3, '3'])
console.log(s) // Set {1, 2, 3, '3'}

s.add(4)
s.add(4)
console.log(s) // Set {1, 2, 3, '3', 4}
s.delete(3)
console.log(s) // Set {1, 2, '3', 4}
