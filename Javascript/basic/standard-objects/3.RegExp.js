'use strict'
/**
 * author: rovo98
 * Javascript 中的正则表达式
 */

// 1. 创建一个正则表达式的两种方式
let re1 = /ABC\-001/
let re2 = new RegExp('ABC\\-001')
console.log(re1)
console.log(re2)

let re = /^\d{3}\-\d{3,8}$/
console.log(re)
console.log(re.test('010-12345')) // true
console.log(re.test('010-1234x')) // false
console.log(re.test('010 12345')) // false

// 切分字符串
console.log('a b   c'.split(' ')) // 【'a', 'b', '', '', 'c']
// 无法识别连续的空格
console.log('a b    c'.split(/\s+/)) // ['a', 'b', 'c']
console.log('a,b c   d'.split(/[\s+\,]+/)) // ['a', 'b', 'c', 'd'] 加入,试试
console.log('a,b;; c   d'.split(/[\s\,\;]+/))// ['a', 'b', 'c', 'd'] 加入;试试

// 分组
// 除了简单的判断是否匹配之外，正则表达式还有提取子串的强大功能。用()表示一个要提取的一个分组
//
// 比如: ^(\d{3})-(\d{3,8})$
let re3 = /^(\d{3})-(\d{3,8})$/
console.log(re3.exec('010-12345')) // ['010-12345‘， '101', '12345‘]
console.log(re3.exec('010 12345')) // null

let re4 = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|1[0-9]]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/
console.log(re4.exec('19:05:30'))

// 贪婪匹配： 正则表达式默认使用贪婪匹配，也就是匹配尽可能多的字符，例如:

let re6 = /^(\d+)(0*)$/
console.log(re6.exec('102300')) // ['102300', '102300', ''] \d+会把所有的数字给匹配，导致0*只能匹配空字符串
let re7 = /^(\d+?)(0*)$/
console.log(re7.exec('102300')) // ['102300', '1023' ,'00'] 使用？来尽量的少匹配

// 全局搜索
// Javascript 的正则表达式还有几个特殊的标志，最常用的是g, 表示全局匹配
//
let r1 = /test/g
// 等价于
let r2 = new RegExp('test', 'g')
console.log(r1)
console.log(r2)

// 全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上一次匹配到的最后索引
let s = 'JavaScript, VBScript, JScript and EMAScript'
let re8 = /[a-zA-Z]+Script/g
console.log(re8.exec(s)) // ['JavaScript']
console.log(re8.lastIndex) // 10

console.log(re8.exec(s)) // ['VBScript]
console.log(re8.lastIndex) // 20

console.log(re8.exec(s)) // ['JScript']
console.log(re8.lastIndex) // 29

console.log(re8.exec(s)) // ['EMAScript']
console.log(re8.lastIndex) // 43

console.log(re8.exec(s)) // null 直到结束仍没有匹配到

// 全局匹配类似搜索，因此不能使用/^...$/.,那样只会最多匹配一次
//
// 正则表达式还可以指定i 标志，表示忽略大小写，m标志表示执行多行匹配。
