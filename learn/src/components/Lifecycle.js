import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor (props) {
    super(props)
    console.log('1. 构造函数')
    this.state = {
      msg: '来自属性传递' + props.prop
    }
  }
  componentWillMount () {
    // 此时可以访问属性和状态，可以进行api调用 但是没有办法做dom相关操作
    // console.log(this.state.msg)
    console.log('2. 组件将要挂载')
  }
  componentDidMount () {
    // 组件已经渲染完成， 可以进行状态更新操作
    console.log('3. 组件已挂载')
  }
  componentWillReceiveProps () {
    // 父组件传递的属性有变化， 做相应的操作
    console.log('4. 组件属性更新了')
  }
  shouldComponentUpdate () {
    // 组件是否需要更新, 返回boolean
    console.log('5. 组件是否需要更新？')
    return true
  }
  componentWillUpdate () {
    console.log('6. 组件将要更新')
  }
  componentDidUpdate () {
    console.log('7. 组件已经更新')
  }
  render () {
    console.log('组件渲染')
    return (
        <div>组件生命周期探究</div>
    )
  }
}

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      someProp: '北辰'
    }

    setTimeout (() => {
      this.setState({
        someProp: 'beichen'
      })
    }, 2000)
  }
  render () {
    return <LifeCycle prop={this.state.someProp}/>
  }
}

