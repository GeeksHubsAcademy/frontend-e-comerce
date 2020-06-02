import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Register from './containers/User/Register/Register';
import Login from './containers/User/Login/Login';
import Profile from './containers/User/Profile/Profile';
import { getUserInfo } from './redux/actions/users';
function App() {
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      getUserInfo()
      .catch(console.error)
    }
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/profile' component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
