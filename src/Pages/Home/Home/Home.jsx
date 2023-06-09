import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../Popular/PopularClass';
import PopularInstructor from '../Popular/PopularInstructor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>

        </div>
    );
};

export default Home;