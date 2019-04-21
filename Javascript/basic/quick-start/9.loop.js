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
