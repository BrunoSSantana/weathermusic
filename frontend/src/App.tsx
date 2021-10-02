import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Teste from './pages/Teste';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuComponent from './Components/Menu';


function App() {

  var auth = localStorage.getItem('token')
  
  return (
    auth ? 
    <BrowserRouter>
      <GlobalStyles /> 
      <MenuComponent />
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/teste' exact component={Teste} /> 
    </BrowserRouter>
    :
    <BrowserRouter>   
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <GlobalStyles />

    </BrowserRouter>
  ); 
}

export default App;
