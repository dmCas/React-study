import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom' 
import './App.css';
import 'antd/dist/antd.css'
import MainPage from './pages/main'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/' component={MainPage}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
