import './App.css';
import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import axios from "axios";

// Utils
import requireAuth from "./utils/RequireAuth";

// Components
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";


// Containers
import Home from "./containers/Home";
import Signup from "./containers/signup/Signup";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  render() {
    return (
      <div>
        <Root> 
        <ToastContainer position="bottom-center" />
          <Layout>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={requireAuth(Dashboard)} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
          </Layout>
        </Root> 
      </div>
    );
  }
}

export default App;