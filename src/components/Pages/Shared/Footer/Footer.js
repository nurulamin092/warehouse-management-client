import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='main-footer bg-dark text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem, ipsum.</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem, ipsum.</li>
                            <li>Corrupti, error?</li>
                            <li>Asperiores, rerum.</li>
                            <li>Corporis, a.</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem, ipsum.</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem, ipsum.</li>
                            <li>Corrupti, error?</li>
                            <li>Asperiores, rerum.</li>
                            <li>Corporis, a.</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem, ipsum.</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem, ipsum.</li>
                            <li>Corrupti, error?</li>
                            <li>Asperiores, rerum.</li>
                            <li>Corporis, a.</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4>Lorem, ipsum.</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem, ipsum.</li>
                            <li>Corrupti, error?</li>
                            <li>Asperiores, rerum.</li>
                            <li>Corporis, a.</li>
                        </ul>
                    </div>
                </div>

            </div>
            <p className='text-center'><small>copyright @ {year} </small></p>
        </footer>

    );
};

export default Footer;