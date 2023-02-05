import React, { useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
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

                        <div className="col-md-8" id="myAccount">

                            <div className="card text-center text-white" id="accountCard">

                                <div className="card-header" id="my-account">

                                    <h4 className="card-title">My Account Information</h4>

                                </div>

                                    <div className="card-body">

                                        <table className="table table-sm">
                                            <tbody>    
                                                <tr className="h5">
                                                    <th className="pt-2 pb-3 pl-1">User</th>
                                                    <th className="pt-2 pb-3 pl-1">Email</th>
                                                    <th className="pt-2 pb-3 pl-1">Last Login</th>
                                                </tr>

                                                <tr className="h6">
                                                    <td className="pt-3 pb-3 pl-1">{user?.first_name} {user?.last_name}</td>
                                                    <td className="pt-3 pb-3 pl-1">{user?.email}</td>
                                                    <td className="pt-3 pb-3 pl-1">{user?.last_login}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                            </div>

                        </div>

                </div>

            </div>


        );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    tickets: state.tickets.tickets

  });

export default connect(mapStateToProps, {loadTickets, getTicketID, clearTicketID, clearViewTicket, clearValidUploads, clearVerifyPID, clearCreateTicket})(Dashbaord);