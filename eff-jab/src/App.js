import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CenterRegister from "./components/CenterRegister";
function App() {
  return (
    
      <BrowserRouter>
      
         <Switch>
       
           <Route path='/' exact>
           <h1>Hello! home page </h1>
           </Route>
           <Route path='/register' exact>
              <CenterRegister />
           </Route>

         </Switch>
      </BrowserRouter>
      
    
  );
}

export default App;
