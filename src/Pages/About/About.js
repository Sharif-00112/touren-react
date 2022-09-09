import React from 'react';

const About = () => {
    return (
        <div className='' id='about'>
            <h2 className='text-success mt-5'>-About TOUREN-</h2> <hr className='mx-auto w-25'/>

            <div className="row row-cols-1 row-cols-md-2 g-4 m-3 p-1 justify-content-around align-items-center bg-success bg-opacity-25">
                <div className="col">
                    <img className='img-fluid w-50 mb-4' src="https://freedesignfile.com/upload/2018/06/world-tourism-travel-vector.jpg" alt="" />
                </div>
                <div className="col">
                    <p className='m-3'>Tourism comprises the activities of persons travelling to and staying in places outside their usual environment for not more than one consecutive year (12 months) for leisure, business or other purposes. Tourism boosts the revenue of the economy, creates thousands of jobs, develops the infrastructures of a country, and plants a sense of cultural exchange between foreigners and citizens. The number of jobs created by tourism in many different areas is significant.</p>
                </div>
            </div>
        </div>
    );
};

export default About;