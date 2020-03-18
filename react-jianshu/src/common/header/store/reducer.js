import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  switch(action.type){
    case types.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true)
      // return {
      //   focused: true
      // };
    case types.SEARCH_BLUR:
      return state.set('focused', false)
    // return {
    //   focused: false
    // };
  
  // if(action.type === 'search_focus'){
  //   return {
  //     focused: true
  //   }
  // }
  // if(action.type === 'search_blur'){
  //   return {
  //     focused: false
  //   }
  // }

  default: return state
  }
}