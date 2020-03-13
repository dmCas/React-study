import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Demo1 from './component/useState/indexHook'
import Demo2 from './component/useEffect/indexHook'
import MakeUnmount from './component/useEffect/makeUnmount'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MakeUnmount  />, document.getElementById('root'));
serviceWorker.unregister();
