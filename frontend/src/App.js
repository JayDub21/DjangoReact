import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Error toasts(messages)
import { ToastContainer } from 'react-toastify';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import Layout from './hocs/Layout';
import Footer from './components/Footer'
import NotFound from './components/NotFound';
// Containers
import Dashboard from './containers/Dashboard';
import Activate from './containers/Activate';
import ConfirmResetPassword from './containers/ConfirmResetPassword';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import Signup from './containers/Signup';




const App = () => (
    <Provider store={store}>
        <Router>
            <ToastContainer position="bottom-center" />
            <Layout>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/pending-info' component={PendingInfo} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ConfirmResetPassword} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Layout>
        </Router>
    </Provider>
);

export default App;