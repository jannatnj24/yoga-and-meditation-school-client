import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../Popular/PopularClass';
import PopularInstructor from '../Popular/PopularInstructor';
import Benefits from '../../Benefits/Benefits';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>
         <Benefits></Benefits>

        </div>
    );
};

export default Home;