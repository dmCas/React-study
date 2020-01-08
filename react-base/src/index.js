import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//浏览器专用的 Dom
ReactDOM.render(<App />, document.getElementById('root'));

// react-native
// ReactNative.render()
// 核心的包： react
// 平台相关的包： react-dom / react native / react-TV 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
