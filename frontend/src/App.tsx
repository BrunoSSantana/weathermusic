import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Teste from './pages/Teste';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/teste' exact component={Teste} />
    </BrowserRouter>
  );
}

export default App;
