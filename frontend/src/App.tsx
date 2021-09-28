import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
    </BrowserRouter>
  );
}

export default App;
