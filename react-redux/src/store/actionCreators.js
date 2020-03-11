import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddAction = () => ({
  type: ADD_TODO_LIST
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// redux thunk
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then(
//       (res) => {
//         const data = res.data 
//         const action = initListAction(Object.keys(data.hotComments[0]))
//         // store.dispatch(action)
//         console.log(action)
//         dispatch(action)
//       }
//     )
//   }
// }

export const getInitList = () => ({
  type: GET_INIT_LIST
})