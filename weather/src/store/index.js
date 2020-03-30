import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer' 
import thunk from 'redux-thunk'

const componentEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = componentEnhanders(
  applyMiddleware(thunk)
)
const store = createStore(reducer, enhancer)

export default store