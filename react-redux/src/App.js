// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'
import {CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './store/actionTypes.js'


// store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // console.log(store.getState())
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    store.subscribe(this.handleStoreChange) // 来看仓库里的数据是否发生变化
  }

  handleInputChange (e) {
    // 将input输入的内容存到仓库
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action) // 让管理员听到这句话
  }

  handleStoreChange() {
    // console.log(store.getState())
    this.setState(store.getState())
  }

  handleBtnSubmit(){
    console.log('store change')
    const action = {
      type: ADD_TODO_LIST
    }
    store.dispatch(action)
  }

  handleItemDelete(index){
    console.log(index)
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
  render() {
    return (

      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input placeholder="Write data" value = {this.state.inputValue} style={{ width: 300 }} 
          onChange={this.handleInputChange}/>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={this.handleBtnSubmit}>提交</Button>
        </div>
        <List
          style = {{marginTop: '10px', maxWidth:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => 
            <List.Item onClick={this.handleItemDelete}>
              {item}
            </List.Item>}
        />
      </div>
    )
  }
}

export default TodoList