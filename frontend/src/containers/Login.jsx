import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit  = e => {
        e.preventDefault();

        login(email, password);

    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className="container-fluid outerMargin">
            <div className="row">
                <div className="col-md-5">
                    <h2>Login</h2>
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="email" id="floatingEmail" name="email" value={email} onChange={e => onChange(e)} required />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>


                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="password" id="floatingPassword" name="password" value={password} onChange={e => onChange(e)} required />
                        <label htmlFor="floatingPassword">Password</label>
                        </div>


                        <div className="col-12">
                        <button type="submit" className="btn btn-success m-1">Login</button>
                        <Link className="btn btn-primary m-1" to='/reset-password'>Forgot Password</Link>
                        <Link className="btn btn-primary" to='/signup'>Create Account</Link>
                        </div>

                    </form>
                </div>

            </div>
        
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);