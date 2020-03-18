import React from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        {/* 内容都受BrowserHistory控制 */}
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
