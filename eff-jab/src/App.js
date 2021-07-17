import logo from './logo.svg';
import './App.css';
import Community from './community/community'
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
           <Route path='/community' exact>
             <Community/>
           </Route>
         
         </Switch>
      </BrowserRouter>
      
    
  );
}

export default App;
