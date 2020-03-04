import React, { Fragment } from 'react'
import { Form, Input, Button, Card, Message } from 'antd'
import './index.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Particles from 'reactparticles.js';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: ''
    }

    this.handleInput1 = this.handleInput1.bind(this)
    this.handleInput2 = this.handleInput2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  handleInput1(e) {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  handleInput2(e) {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(this.state.username, this.state.password)
    // this.props.form.validateFields(async (err,value) => {
    //   if(!err){
        console.log(123)
        sessionStorage.setItem('blogUser', 'beichen')
        sessionStorage.setItem('menuItemKey', '0')
        this.props.history.push('/admin/page')
        // vue this.$router.push({path: '/admin/page'})
    //   }
    // })
  }

  render () {
    return (
      <div className="login">
        <Particles id="particles1" config="particles1.json" height="90%" />
        <Card className="login-form" style={{width: 300, borderRadius: 4}}> 
          <Form onFinish={this.handleSubmit}>

           <Form.Item name="Username" rules={[{ required: true, message: '请输入用户名' }]}>
             <Input onChange={this.handleInput1} prefix={<UserOutlined style={{color: 'rgba(0,0,0, 0.25)'}} />} placeholder="请输入用户名"/>
           </Form.Item>

           <Form.Item name="Password" rules={[{ required: true, message: '请输入密码' }]}>
             <Input onChange={this.handleInput2}  prefix={<LockOutlined style={{color: 'rgba(0,0,0, 0.25)'}} />} placeholder="请输入密码"/>
           </Form.Item>

           <Button type="primary" htmlType="submit" block className="login-form-btn">Log in</Button>
          </Form>
        </Card>
        
      </div>
    )
  }
}



export default Login