import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Product";
import Singup from "./components/pages/Signup";

function App() {
  return (
     <div>
         <Router>
             <Navbar/>
             <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/services' component={Services}/>
                 <Route exact path='/products' component={Products}/>
                 <Route path='/signup' component={Singup}/>
             </Switch>
         </Router>
     </div>

  );
}

export default App;
