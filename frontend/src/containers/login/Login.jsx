import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";            
import PropTypes from "prop-types";   

import { login } from '../../actions/auth';


const Login = ({ login }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '' 
    });

    const { username, password } = userData;

    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

    const onSubmit  = e => {
        e.preventDefault();
        const redirectTo = '/dashboard'
        login(userData, redirectTo);
    };

    return (
        <div className="container-fluid outerMargin">
            <div className="row">
                <div className="col-md-5">
                    <h2>Login</h2>
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>

                        <div className="form-floating mb-3">
                        <input type="username" className="form-control" placeholder="username" id="floatingusername" name="username" value={username} onChange={e => onChange(e)} required />
                        <label htmlFor="floatingInput">username</label>
                        </div>


                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="password" id="floatingPassword" name="password" value={password} onChange={e => onChange(e)} required />
                        <label htmlFor="floatingPassword">Password</label>
                        </div>


                        <div className="col-12">
                        <button type="submit" className="btn btn-success m-1">Login</button>
                        <Link className="btn btn-primary" to='/signup'>Create Account</Link>
                        </div>

                    </form>
                </div>

            </div>
        
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {
    login
  })(withRouter(Login));