import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Interno from './components/Interno/Interno';

function App() {
  return (
    <BrowserRouter>
       <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/interno" exact component={Interno}/>
        <Redirect to="/home"/>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
