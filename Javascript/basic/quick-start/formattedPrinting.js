'use strict';

// 如果浏览器支持模板字符串，将会自动替换字符串内部的变量：

var name = '小明';
var age = 20;

console.log(`你好，${name}, 你今年${age}岁了！`);