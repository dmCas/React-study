import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Layout from './pages/Layout'

function App() {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router> 
  )
}

export default App