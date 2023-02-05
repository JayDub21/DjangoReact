import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
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

                <h2>Password Reset Confirmation</h2>
                <hr />
                
                <form onSubmit={e => onSubmit(e)}>

                    <div className="row">
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="New Password" 
                            name="new_password" value={new_password} onChange={e => onChange(e)} required/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword2" placeholder="Confirm New Password" 
                            name="re_new_password" value={re_new_password} onChange={e => onChange(e)} required/>
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <button type="submit" className="btn btn-success px-2"> Reset Password </button>
                        </div>
                    </div> 

                </form>

            </div>

            <div className="col-md-3"></div>

        </div>

    </div>

  )};