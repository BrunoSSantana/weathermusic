import React from 'react';
import GlobalStyles from './styles/global'
import Header from './components/Header';
import Title from './components/Title';
import InputText from './components/InputText';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
