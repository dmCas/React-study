import React from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
