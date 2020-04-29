import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import "./assets/css/reset.css"
import "./assets/js/rem"
// antd 样式
import 'antd-mobile/dist/antd-mobile.css';

// 定义路由模式
import {
  HashRouter
} from "react-router-dom"

import {
  Provider
} from "react-redux"
import store from "./store"
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);