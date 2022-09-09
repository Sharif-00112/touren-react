import React from 'react';
import { Link } from 'react-router-dom';
import errorIMG from '../../images/404-error-2.png'

const NotFound = () => {
    return (
        <div>
            {/* <h2>404 Not Found</h2> */}
            <img className='w-75 p-5' src={errorIMG} alt="404 Page Not Found!" />
            <br />
            <Link to='/'><button className='btn btn-success mb-5'>Back to Homepage</button></Link>
        </div>
    );
};

export default NotFound;