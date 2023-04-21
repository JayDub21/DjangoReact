import React from "react";
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';


const Dashbaord = ({ isAuthenticated, user }) => {
    
    if (!isAuthenticated) {
        return <Redirect to='/login' />
    }
    
        return (
            
            <div className="contaner-fluid" id="dashboardContainer">

                <br/>

                <div className="row">

                        <div classname="col-sm-2"></div>

                        <div className="col-md-8" id="myAccount">

                            <div className="card text-center text-white" id="accountCard">

                                <div className="card-header" id="accountHeader">

                                    <h4 className="card-title">My Account Information</h4>

                                </div>

                                    <div className="card-body">

                                        <table className="table table-sm">
                                            <tbody>    
                                                <tr className="h5">
                                                    <th className="pt-2 pb-3 pl-1">User</th>
                                                    <th className="pt-2 pb-3 pl-1">Email</th>
                                                </tr>

                                                <tr className="h6">
                                                    <td className="pt-3 pb-3 pl-1">{user?.username}</td>
                                                    <td className="pt-3 pb-3 pl-1">{user?.email}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                            </div>

                        </div>

                        <div classname="col-sm-2"></div>

                </div>

            </div>


        );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(Dashbaord);