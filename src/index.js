import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./assets/css/reset.css"
// antd 样式
import 'antd-mobile/dist/antd-mobile.css';

// 定义路由模式
import { HashRouter } from "react-router-dom"
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);


