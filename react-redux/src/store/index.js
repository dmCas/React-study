import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const componentEnhanders = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ({
    }) : compose;

const enhancer = componentEnhanders(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(todoSagas)

//store默认状态
// store = {
//   inputValue: '123',
//   list: []
// }
// 经过逻辑操作
// store将自己的值变为newState -> store能改变自己的内容

export default store;