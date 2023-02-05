import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../actions/auth';

// const generator = require('generate-password');

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    first_name: '', 
    last_name: '', 
    password: '',
    re_password: '',
  });


  const { email, first_name, last_name, password, re_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password) {
      signup(email, first_name, last_name, password, re_password );
      console.log(signup);
      setAccountCreated(true);
    } else {
      alert("Passwords Must Match")
    }
  };
  // If user authenticated => Redirect to Dashboard
  if (isAuthenticated) {
    return <Redirect to='/' />
  }
  if (accountCreated) {
    return <Redirect to='/login' />
  }

  return (
   <div className="container-fluid" id="acctAppForm">
      <br/>
      <h2>Your Information:</h2>
      <hr/><br/>

      <form onSubmit={e => onSubmit(e)}>

          <div className="row g-2">

              {/*  First Name Field  */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="officerFirst" placeholder="First Name*" name="first_name" value={first_name}
                  onChange={e => onChange(e)} required/>
                  <label htmlFor="floatingFirstName">First Name</label>
                </div>
              </div>

              {/* Last Name Field */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="officerLast" placeholder="Last Name*" name="last_name" value={last_name}
                  onChange={e => onChange(e)} required/>
                  <label htmlFor="floatingLastName">Last Name</label>
                </div>
              </div>

            </div>


          
          <div className="row g-2">
            {/* Email Field */}
            <div className="col-md-9">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com*" name="email" value={email} onChange={e => onChange(e)} required/>
                <label htmlFor="floatingInput">Email Address</label>
              </div>
            </div>

          </div>

          <div className="row g-2">

            {/* PASSWORD */}
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input className="form-control" type="password" id="floatingPassword" placeholder="Password" 
                name="password" value={password} onChange={e => onChange(e)} required/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
              
                
            {/* PASSWORD CONFIRMATION */}
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input className="form-control" type="password" id="floatingRePassword" placeholder="Confirm Password" 
                name="re_password" value={re_password} onChange={e => onChange(e)} required/>
                <label htmlFor="floatingRePassword">Confirm Password</label>
              </div>
            </div>
          </div>
          
          <br/>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </div>

      </form>
      <br/><br/>
      <div className="row g-2 justify-content-center">
            <div className="col-sm-7">
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
          <br/><br/><br/>
      
   </div>
);
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, { signup })(Signup);