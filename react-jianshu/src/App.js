import React from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        {/* 内容都受BrowserHistory控制 */}
        <div>
          <Route exact path="/" component={Home}></Route>
          {/* ？不影响路由匹配 */}
          {/*  与List.js组件Link匹配 */}
          <Route exact path="/detail/:id" component={Detail}></Route>
          {/* <Route exact path="/detail" component={Detail}></Route> */}
          <Route exact path="/login" component={Login}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
