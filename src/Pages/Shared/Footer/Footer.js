import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright Reserved; <span className='text-success'>TOUREN</span> @ {year} </small></p>
        </footer>
    );
};

export default Footer;