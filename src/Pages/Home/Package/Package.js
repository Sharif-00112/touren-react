import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const {key, title, durationDays, durationNights, img, price, tagline} = props.pack;
    return (
        <div className="col">
            <div className="card h-100  bg-success bg-opacity-25">
                <img src={img} className="card-img-top p-2" alt={title}/>
                <div className="card-body p-3">
                    <h5 className="card-title fw-bold fs-3">{title}</h5>
                    <p className="card-text">{tagline}</p>

                    <small className="mx-3">{durationDays} Days - {durationNights} Nights</small>
                </div>
                <div className="card-footer d-flex justify-content-around align-items-center">
                    <small className='mx-3 fw-bold'>BDT {price}</small>
                    <Link className='text-decoration-none text-white' to={`/booking/${key}`}><u><button className='btn btn-success fw-bold'>Book Now</button></u></Link>
                </div>
            </div>
        </div>
    );
};

export default Package;