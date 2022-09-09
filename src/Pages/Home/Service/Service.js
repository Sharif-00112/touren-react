import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    return (
        <div className='service bg-success bg-opacity-25'>
            <img className='w-100 p-2' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            
            <Link to={`/booking/${id}`}><button className='btn btn-secondary'>Book {name}</button></Link>
        </div>
    );
};

export default Service;