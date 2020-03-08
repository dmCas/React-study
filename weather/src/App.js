import React from 'react';
import { BrowserRouter as Router , Route, Link, Redirect } from 'react-router-dom' 
import './App.css';
import {  Button } from 'antd'
import 'antd/dist/antd.css'
import routes from './Router/web.js'

function App() {
  return (
    <Router>
      <div>
        <Route path={routes.path} component={routes.component}></Route>
      </div>
    </Router>
  );
}

export default App;
