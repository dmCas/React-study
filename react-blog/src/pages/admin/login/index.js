import React, { Fragment } from 'react'
import { Form, Input, Button, Card, Message } from 'antd'
import './index.less'
import './index.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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
          <Form>

           <Form.Item name="Username" rules={[{ required: true, message: '请输入用户名' }]}>
             <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0, 0.25)'}} />} placeholder="请输入用户名"/>
           </Form.Item>

           <Form.Item name="Password" rules={[{ required: true, message: '请输入密码' }]}>
             <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0, 0.25)'}} />} placeholder="请输入密码"/>
           </Form.Item>

           <Button type="primary" block className="login-form-btn">Log in</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login