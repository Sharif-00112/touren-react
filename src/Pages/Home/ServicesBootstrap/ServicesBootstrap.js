import React, { useEffect, useState } from 'react';
import ServiceBootstrap from '../ServiceBootstrap/ServiceBootstrap';

const ServicesBootstrap = () => {
    const [servicesBootstrap, setServicesBootstrap] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServicesBootstrap(data))
    }, []) 

    return (
        <div className='container'>
            <h2 className='text-success'>All Services Bootstrap</h2>

            {/* row-cols-1 row-cols-md-2 row-cols-lg-3  g-4  */}
            <div className="row">
                {
                    servicesBootstrap.map(serviceBootstrap => <ServiceBootstrap key={serviceBootstrap.id} serviceBootstrap={serviceBootstrap}></ServiceBootstrap> )
                }
            </div>
        </div>
    );
};

export default ServicesBootstrap;