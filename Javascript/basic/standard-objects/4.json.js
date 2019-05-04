'use stric'
/**
 * author : rovo98
 *
 *  JSON (Javascript object Notation)
 *
 * JSON实际上是Javascript 的一个子集，在JSON中，一共几种数据类型:
 * number: 和Javascript的number 完全一致；
 * boolean : 就是Javascript 的true 和 false;
 * string : 就是Javascript 的string;
 * null: 就是Javascript的null;
 * array: 就是Javascript的Array表示方式 -- []
 * object: 就是Javascript 的 {...}表示方式
 */

// key: JSON定死了字符集必须是UTF-8,表示多语言就没有问题了， 为了统一解析，JSON的字符串规定必须使用双引号""， Object 的键也必须使用
//    双引号
//
// 序列化： 把一个Javascript 对象转换成JSON格式的字符串
let xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-scholl': '\"W3C\" Middle School',
  skills: ['Javascript', 'Java', 'Python', 'Lisp']
}
console.log(JSON.stringify(xiaoming))

// 要输入变得好看一些，可以加上参数，按缩进输出
console.log(JSON.stringify(xiaoming, null, '    '))

// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array:
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '    '))

// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理
function convert (key, value) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
}

console.log(JSON.stringify(xiaoming, convert, '    ')) // 把所有的属性值都变成大写

// 如果我们想要精确控制如何序列化小明，可以给xiaoming 定义一个toJSON() 的方法， 直接返回JSON应该序列化的数据
let xiaoming1 = {
  name: '小明',
  age: 14,
  gender: true,
  grade: null,
  'middle-school': '\"W3C\" Middle Scholl',
  skills: ['Javascript', 'Java', 'Python', 'Lisp'],
  toJSON: function () {
    return {
      'Name': this.name,
      'Age': this.age
    }
  }
}
console.log(JSON.stringify(xiaoming1)) // 和Java的toString()方法的重写很类似

// 反序列化
// 拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变一个Javascript对象
console.log(JSON.parse('[1,2,3,true]')) // [1, 2, 3, true]
console.log(JSON.parse('{"name":"小明", "age":14}')) // Object {name: '小明', age: 14}
console.log('true') // true
console.log(JSON.parse('123.45')) // 123.45
