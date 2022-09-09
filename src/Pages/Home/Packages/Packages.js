import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( ()=>{
        fetch('packages.json')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, [])

    return (
        <div className='' id='packages'>
            <h2 className='text-success mt-5'>-Trending Tour Packages-</h2> <hr className='mx-auto w-25'/>

            <div className="packages-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3 p-1">
                    {
                        packages.map(pack => <Package 
                            key = {pack.key}
                            pack = {pack}
                        ></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;