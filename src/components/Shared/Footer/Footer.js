import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='main-footer mt-3 bg-dark text-white'>
            <div className='footer'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Laptop Hut.</h4>
                        <ul className='list-unstyled'>
                            <li>laptophut@hut.com</li>
                            <li>Address: 19/2, West Panthapath</li>
                            <li>Dhanmondi, Dhaka-1205, Bangladesh</li>
                        </ul>
                    </div>

                    <div className='col-md-3 col-sm-6'>
                        <h4>About Us.</h4>
                        <ul className='list-unstyled'>
                            <li>Overview</li>
                            <li>Management Profile</li>
                            <li>Company Policy</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Quick Links.</h4>
                        <ul className='list-unstyled'>
                            <li>Contact.</li>
                            <li>Branches</li>
                            <li>Brands.</li>
                            <li>Service Center.</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Company Policies.</h4>
                        <ul className='list-unstyled'>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Service Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>

            </div>
            <p className='text-center'><small>copyright @ {year} </small>All Rights Reserved.</p>
        </footer>

    );
};

export default Footer;