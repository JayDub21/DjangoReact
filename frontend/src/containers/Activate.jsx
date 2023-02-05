import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

  const verify_acount = e => {
      const uid = match.params.uid;
      const token = match.params.token;

    verify(uid, token);
    setVerified(true);


  };
  // If user authenticated => Redirect to Dashboard
  if (verified) {
    return <Redirect to='/first-login' />
  }

  return (

    <div className="container-fluid m-5">
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2> Verify Your Account:</h2>
            <button onClick={verify_acount} type='button' className="btn btn-success">Verify</button>
        </div>
    </div>

  )};

  
export default connect(null, { verify })(Activate);