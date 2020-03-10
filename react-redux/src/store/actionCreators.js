import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './actionTypes'


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