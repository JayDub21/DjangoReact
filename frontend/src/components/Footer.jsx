import React, { Fragment } from "react";
import { Link } from 'react-router-dom';




const Footer = () => {
    const year = new Date().getFullYear();
return (
    <Fragment>   
            <div className="fixed-bottom" id="secureShareFooter">  
                <div className="row">
                    <div className="col-md-12">

                        <h6 className="text-center">Copyright © {year} Justin Wofford</h6>
                       
                    </div>
                </div>
            </div>


    </Fragment>
    );
};


export default (Footer);