// Redux = flux + Reduce
import React, { Component } from 'react'

import 'antd/dist/antd.css'
import store from './store/index.js'
// import {CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './store/actionTypes.js'
import { getInitList, getInputChangeAction, getAddAction, getDeleteItemAction, initListAction, getTodoList } from './store/actionCreators'
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
    // ---------- 原始做法 代码臃肿
    // axios.get('https://api.github.com/users/octocat/gists').then(
    //   (res) => {
    //     const data = res.data 
    //     const action = initListAction(Object.keys(data[0].owner))
    //     console.log(action)
    //     store.dispatch(action)
    //   }
    // )
    // ----------- redux-thunk 中间件
    // const action = getTodoList()
    // // store-thunk调用这个方法的同时将dispatch这个功能交给这个方法
    // store.dispatch(action) // 因为此刻的store已经集成的thunk的功能，所以可以直接dispatch一个函数交给store处理
    

    // ---------- redux saga 中间件
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
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