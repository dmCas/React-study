import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconGlobalStyle } from './static/icon-font/iconfont'
import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <IconGlobalStyle />
    <App />
  </div>
  , document.getElementById('root'));

