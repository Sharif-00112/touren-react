import React from 'react';

const ServiceBootstrap = (props) => {
    const {id, name, price, time, img, details} = props.serviceBootstrap;
    return (
        <div className='col-12 col-sm-6 col-md-4 m-2 p-2 bg-success bg-opacity-50 text-white rounded-3'>
            <h3>ServiceB - {id}</h3>
            <h4>{name}</h4>
            <p>{details}</p>
            <img className='img-fluid p-2' src={img} alt={name} />
            <p>Charge: {price}</p>
            <small>Time: {time} Hours</small>
        </div>
    );
};

export default ServiceBootstrap;