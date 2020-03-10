// Redux = flux + Reduce
import React, { Component } from 'react'

import 'antd/dist/antd.css'
import store from './store/index.js'
// import {CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './store/actionTypes.js'
import { getInputChangeAction, getAddAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
// store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // console.log(store.getState())
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnSubmit = this.handleBtnSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 来看仓库里的数据是否发生变化
  }

  componentDidMount () {
    axios.get('https://api.github.com/users/octocat/gists').then(
      (res) => {
        console.log(res)
        const data = res.data 
        const action = initListAction(Object.keys(data[0].owner))
        store.dispatch(action)
        console.log(action)
      }
    )
  }

  handleInputChange (e) {
    // 将input输入的内容存到仓库
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) // 让管理员听到这句话
  }

  handleStoreChange() {
    // console.log(store.getState())
    this.setState(store.getState())
  }

  handleBtnSubmit(){
    console.log('store change')
    // const action = {
    //   type: ADD_TODO_LIST
    // }
    const action = getAddAction()
    store.dispatch(action)
  }

  handleItemDelete(index){
    console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return <TodoListUI 
    inputValue={this.state.inputValue}
    handleInputChange = {this.handleInputChange}
    handleBtnSubmit = {this.handleBtnSubmit}
    list = {this.state.list}
    handleItemDelete = {this.handleItemDelete}
    />
  }
}

export default TodoList