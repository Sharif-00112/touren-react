import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className="" id='home'>
            <Banner></Banner>
            <Packages></Packages>
            <Reviews></Reviews>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;