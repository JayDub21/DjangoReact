import React, { Fragment, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';


const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
        <Fragment>
                <li className="nav-item m-1 ssNavLink">
                <Link className="nav-link" to="/login">Login</Link>
                </li> 
        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
                <li className="nav-item m-1 ssNavLink">
                <Link className="nav-link" to="/">Dashboard</Link>
                </li>

                <li className="nav-item m-1 ssNavLink">
                <Link className="nav-link" to="/login" onClick={logout_user}>Logout</Link>
                </li>
        </Fragment>

    );


return (
    <Fragment>
        
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">


                {/* Bootstrap Hamburger Toggle for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <h1>DjangoReact</h1>
                    <ul className="navbar-nav ms-auto" id="navItems">
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>

            </div>
        </nav>

        {redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
    </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);