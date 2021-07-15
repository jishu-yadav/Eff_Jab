import logo from './logo.svg';
import './App.css';
import Community from './community/community'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
    
      <BrowserRouter>
         <Switch>
           <Route path='/' exact>
             
           </Route>
           <Route path='/community' exact>
             <Community/>
           </Route>
         
         </Switch>
      </BrowserRouter>
      
    
  );
}

export default App;
