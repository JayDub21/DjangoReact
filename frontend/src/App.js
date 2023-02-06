
import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import Home from "./containers/Home";
import Signup from "./containers/signup/Signup";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  render() {
    return (
      <div>
        <Root> 
        <ToastContainer position="bottom-center" />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Route path="*">Ups</Route>
          </Switch>
        </Root> 
      </div>
    );
  }
}

export default App;