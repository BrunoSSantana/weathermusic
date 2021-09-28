import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Header from './components/Header';
import Title from './components/Title';
import InputText from './components/InputText';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path='/' exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
