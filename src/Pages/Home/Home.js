import React from 'react';
import CustomerFeedBack from '../../CustomerFeedBack/CustomerFeedBack';
import About from './About/About';
import Banner from './Banner/Banner';
import DestinationBd from './DestinationBd/DestinationBd';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DestinationBd></DestinationBd>
            <About></About>
            <CustomerFeedBack></CustomerFeedBack>
        </div>
    );
};

export default Home;