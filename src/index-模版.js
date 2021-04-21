import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 组件化（导入组件）
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

// 在脚手架中使用React
const el = React.createElement("h1", null, "Hello React 脚手架");
ReactDOM.render(el, document.getElementById("root"));

// 在脚手架中使用JSX
// const el = <h1>Hello React JSX 脚手架</h1>
// ReactDOM.render(el, document.getElementById("root"));
