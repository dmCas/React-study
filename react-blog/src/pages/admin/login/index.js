import React from 'react'
import { Form, Input, Button, Card, Message } from 'antd'
import './index.less'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    return (
      <div className="login">
        <Card className="login-form" style={{width: 300, borderRadius: 4}}> 
          Hello world
        </Card>
      </div>
    )
  }
}

export default Login