import React, { Component } from 'react'
// import { actionCreators } from './store'
import { connect } from 'react-redux'
import {
         LoginWrapper,
         LoginBox,
         Input,
         Button
       } from './style'

class Login extends Component {
  render () {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账户" />
          <Input placeholder="密码" />
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => {
  // return {
  // }
}


export default connect(mapState, mapDispatch)(Login)