import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link, Redirect } from 'react-router-dom' 
import Login from './pages/admin/login'

class App extends Component {
  constructor(props){
    super(props)
  }

  //Redirect 路由重定向
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect  to="/web/index" />} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    )
  }
}

export default App