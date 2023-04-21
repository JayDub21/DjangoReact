import React, { useState } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { signup } from "../../actions/signup";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    re_password: ''
  });


  const { username, password, re_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password) {
      signup( username, password );
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
      <h2>Signup:</h2>
      <hr/><br/>

      <form onSubmit={e => onSubmit(e)}>

          <div className="row g-2">

              {/*  Username Field  */}
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" placeholder="Username*" name="username" value={username}
                  onChange={e => onChange(e)} required/>
                  <label htmlFor="floatingUsername">Username</label>
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
          </div>
              
          
          <div className="row g-2">
                
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
                  <div className="card-header text-white text-center" id="passwordRequirements">
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

  Signup.propTypes = {
    signup: PropTypes.func.isRequired,
    createUser: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    createUser: state.createUser
  });

  export default connect(mapStateToProps, {
    signup
  })(withRouter(Signup));