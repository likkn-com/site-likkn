import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home/Home';
import Interno from './components/Interno/Interno';
import Lgpd from './components/Lgpd/Lgpd';
import Sap from './components/Sap/Sap';
import Web from './components/Web/Web';
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F9BD7",
    },
    secondary: {
      main: "#2F8A41",
    }
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/interno" exact component={Interno} />
          <Route path="/lgpd" exact component={Lgpd} />
          <Route path="/sap" exact component={Sap} />
          <Route path="/web" exact component={Web} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

