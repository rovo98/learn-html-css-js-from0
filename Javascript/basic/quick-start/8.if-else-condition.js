'use strict'

var height = parseFloat(prompt('请输入您的身高(m):'))
var weight = parseFloat(prompt('请输入您的体重(kg):'))

// console.log(height)
// console.log(weight)

var bmi = weight / (height * height)

if (bmi < 18.5) {
  console.log('过轻')
} else if (bmi >= 18.5 && bmi < 25) {
  console.log('正常')
} else if (bmi >= 28 && bmi < 32) {
  console.log('肥胖')
} else {
  console.log('严重肥胖')
}
