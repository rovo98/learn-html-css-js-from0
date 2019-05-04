'use strict'

/**
 * Date 对象， 用来表示日期和时间
 *
 */

// 1. 获取当前时间
let now = new Date()
console.log(now)
console.log(now.getFullYear()) // 获取年份 2019
console.log(now.getMonth()) // 获取月份 0~11 3 表示4月份
console.log(now.getDate()) // 24 表示24号
console.log(now.getDay()) // 24小时制
console.log(now.getMinutes()) // 获取分钟
console.log(now.getSeconds()) // 秒
console.log(now.getMilliseconds()) // 毫秒数
console.log(now.getTime()) // 以number的形式表示时间戳

// 当前时间是浏览器从本机操作系统获取的时间，所以不一定准确，用户可以把当前时间设定为任何值
// 2. 如果要创建一个指定日期
let d = new Date(2019, 5, 10, 18, 15, 30, 123)
console.log(d) // 2019-6-10 20:15:30:123
console.log(d.toLocaleString())
console.log(d.getUTCHours())

// 第二种创建指定日期和时间的方法是解析一个符合ISO 8601格式的字符串
let d1 = Date.parse('2019-05-24T19:49:22.875+08:00')
console.log(d1)
// 它返回一个时间戳而不是一个Date对象，时间戳可以转换成Date对象
let d2 = new Date(d1)
console.log(d2)

// 3.时区处理
let d4 = new Date(1435146562875)
console.log(d4.toLocaleString())
console.log(d4.toUTCString())
