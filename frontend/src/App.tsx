import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Teste from './pages/Teste';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/teste' exact component={Teste} />
    </BrowserRouter>
  );
}

export default App;
