import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
