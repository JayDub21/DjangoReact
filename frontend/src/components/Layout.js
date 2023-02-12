import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getCurrentUser } from "../actions/auth";
import Navbar from './Navbar';


const Layout = ({ getCurrentUser, children }) => {
    useEffect(() => {
        getCurrentUser()
    }, [getCurrentUser]);

    return (
        <div>
            <Navbar />
            {children}

        </div>
    );
};


export default connect(null,{ getCurrentUser })(Layout);