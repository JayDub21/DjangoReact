import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { checkAuthenticated, load_user, refreshToken } from "../actions/auth";
import Navbar from "../components/Navbar"


const Layout = ({ checkAuthenticated, load_user, refreshToken, children }) => {
    useEffect(() => {
        checkAuthenticated();
        refreshToken();
        load_user();
    }, [checkAuthenticated, refreshToken, load_user]);

    return (
        <div>
            <Navbar />
            {children}

        </div>
    );
};



export default connect(null,{ checkAuthenticated, load_user, refreshToken })(Layout);