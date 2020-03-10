import {CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './actionTypes.js'

const defaultState = {
  inputValue: '123',
  list: []
}

// state 指的是 stroe里面上一次存储的数据
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而不会有任何副作用
export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState // reducer 有一个限制， 可以接收state, 但是绝对不能修改state
  }
  if(action.type === ADD_TODO_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    // console.log(newState.inputValue)
    if(newState.inputValue===''){
      return newState
    }
    newState.list.push(newState.inputValue)
    // console.log(newState.list)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_TODO_ITEM ){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  // console.log(state, action)
  return state
}