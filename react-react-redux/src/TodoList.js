import React, { Component } from 'react'
// import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = store.getState()
  // }

  // handleInputChange(e) {
  //   //用这个值替换store里inputValue的值
  //   console.log(e.target.value)
  //   const action = 
  //   this.props.dispatch(action)
  // }

  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>提交</button> 
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

// 遍历state里面的所有数据给到props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => { // 把store.dispatch 挂载到props上
  return {
    changeInputValue (e) {
      const action = {
        type : 'change_input_value',
        value: e.target.value
      }
      // const action = getChangeInputAction(e.target.value)
      dispatch(action)
    }
  }
}

// connect 是连接
// TodoList 和 store 做连接
// mapStateToProps 的参数就是 store里面的数据 该方法会帮助我们把store映射到props

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)