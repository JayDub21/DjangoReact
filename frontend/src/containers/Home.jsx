import React, { Component } from "react";
import { Link } from "react-router-dom";


const Login = () => {


  return (
      <div className="container-fluid outerMargin">
          <div className="row">
              <div className="col-md-5">
                  <h2>Home</h2>
                  <hr/>
                      <div className="col-12">
                      <Link className="btn btn-primary m-1" to='/login'>Login</Link>
                      <Link className="btn btn-success" to='/signup'>SignUp</Link>
                      </div>
              </div>

          </div>
      
      </div>
  );
};



export default Login;