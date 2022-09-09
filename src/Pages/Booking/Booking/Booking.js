import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{packageId} = useParams();
    return (
        <div>
            <h2 className='text-success mt-5'>-Booking Tour Package {packageId}-</h2> <hr className='mx-auto w-25'/>
        </div>
    );
};

export default Booking;