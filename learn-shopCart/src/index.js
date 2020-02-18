import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import CartSimple from './component/cartSimple'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CartSimple data="React 购物车"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
