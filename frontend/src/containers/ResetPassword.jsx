import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
    
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    // If user authenticated => Redirect to Dashboard
    if (requestSent) {
    return <Redirect to='/' />
    }

  return (

    <div className="container-fluid m-5">

        <div className="row">

            <div className="col-md-3"></div>

            <div className="col-md-6 mb-5">

                <h2>Enter Email to Reset Password:</h2>
                <hr />
                <form onSubmit={e => onSubmit(e)}>

                    <div className="row">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={e => onChange(e)} required/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <button type="submit" className="btn btn-success px-2"> Submit Reset </button>
                        </div>
                    </div>  
                </form>

            </div>

            <div className="col-md-3"></div>

        </div>

        <div className="row g-2 justify-content-center">
            <div className="col-md-6">
              <div className="card">
                  <div className="card-header text-white text-center" id="confidential">
                    <h5>Password Requirements:</h5>
                  </div>
                  <div className="card-body">
                      <p className="card-text">
                        <ul>
                          <li>Must contain at least 9 characters (uppercase, lowercase, number and special character)</li>
                          <li>Cannot contain any portion of the account holder’s:</li>
                          <ul>
                            <li>Name</li>
                            <li>Email Address</li>
                          </ul>
                          <li>Cannot be a "common" password</li>
                          <li>Cannot be only numbers</li>
                        </ul>
                      </p>
                  </div>
              </div>
            </div>
          </div>

    </div>

  )};

export default connect(null, { reset_password })(ResetPassword);