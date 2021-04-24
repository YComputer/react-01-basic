/**
 * 目标：定义一个函数组件并导出
 * 导入 React
 * 定义一个函数
 * 函数名首字母要大写，返回值是一个JSX描述的html结构
 * 导出组件
 */

// 导入 React
import React from "react"; 

// 定义一个函数，函数名称首字母要大写
function Hello() {
  // 函数返回值是一个JSX描述的html结构
  return <h1>Hello React JSX 脚手架，这是文件导出的组件</h1>;
}

// 导出函数组件
export default Hello;
