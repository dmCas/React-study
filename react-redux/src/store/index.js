import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

//store默认状态
// store = {
//   inputValue: '123',
//   list: []
// }
// 经过逻辑操作
// store将自己的值变为newState -> store能改变自己的内容

export default store;