import { reducer as homeReducer } from '../pages/main/store'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  home: homeReducer
})

export default reducer