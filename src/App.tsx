import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Interno from './components/Interno/Interno';
import Webdesign from './components/Webdesign/webdesign';
import Lgpd from './components/Lgpd/lgpd';

function App() {
  return (
    <BrowserRouter>
      {/* <Webdesign /> */}
      <Lgpd />
       <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/interno" exact component={Interno}/>
        <Route path="/webdesign" exact component={Webdesign}/>
        <Redirect to="/home"/>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
