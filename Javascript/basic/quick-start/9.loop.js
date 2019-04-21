'use stric'

/*
 * 利用for 循环计算  1 * 2 * 3 * ... * 10 的值
 * author rovo98
 *
 */

var x = 1
for (var i = 1; i <= 10; i++) {
  x = x * i
}

if (x === 3628800) {
  console.log('1 x 2 x 3 x ... x 10 = ' + x)
} else {
  console.log('计算错误')
}

// 利用索引遍历数组
var arr = ['Apple', 'Google', 'Microsoft']
for (var j = 0; j < arr.length; j++) {
  console.log(arr[j])
}

// for in 遍历对象的属性，注意Array 对象的属性其实就是索引 0， 1， 2，...
var o = {
  name: 'Jack',
  age: 20,
  city: 'Beijing'
}
for (var key in o) {
  console.log(key) // 'name', 'age', 'city'
}
// 过滤对象继承的属性，使用hasOwnProperty方法
for (var k in o) {
  if (o.hasOwnProperty(k)) {
    console.log(k) // 'name', 'age', 'city'
  }
}
// 遍历数组
var a = ['A', 'B', 'C']
for (var i1 in a) {
  console.log(i1) // '0', '1', '2'
  console.log(a[i1]) // 'A', 'B', 'C'
}

// while 循环
var x1 = 0
var n1 = 99
while (n1 > 0) {
  x1 = x1 + n1
  n1 = n1 - 2
}
console.log(x1) // 2500

// do .. while
var n2 = 0
do {
  n2 = n2 + 1
} while (n2 < 100)
console.log(n2) // 100

// simple demo
var names = ['Bart', 'Lisa', 'Adam']
for (var ni in names) {
  console.log('Hello, ' + names[ni] + '!')
}
