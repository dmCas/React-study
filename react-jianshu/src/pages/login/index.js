import React, { Component } from 'react'
// import { actionCreators } from './store'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
         LoginWrapper,
         LoginBox,
         Input,
         Button
       } from './style'

class Login extends Component {
  render () {
    const { login } = this.props
    console.log(login)
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}} />
            <Input placeholder="密码" type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login_web(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
    else {
      return <Redirect to="/" />
    }
    
  }
}

const mapState = (state) => ({
  login: state.login.get('login')
})

const mapDispatch = (dispatch) => ({
  login_web(accountItem, passwordItem) {
    dispatch(actionCreators.login(accountItem.value, passwordItem.value))
  }
})


export default connect(mapState, mapDispatch)(Login)