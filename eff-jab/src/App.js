import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import HomePage from './homepage/homepage'
import Register from './register/register'

function App() {
  return (
    
      <BrowserRouter>
         <Switch>
           <Route path='/' exact>
              <HomePage />
           </Route>
           <Route path='/register' exact>
              <Register />
           </Route>
         
         </Switch>
      </BrowserRouter>
      
    
  );
}

export default App;
