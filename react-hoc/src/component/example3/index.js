import React from 'react'
import User from './user'
import HOC from './OperateRefsHOC'

const EnhanceUser = HOC(User)

class OperateRefs extends React.Component {
  render () {
    return <EnhanceUser name="小明" age={12}></EnhanceUser>
  }
}

export default OperateRefs