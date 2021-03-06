import React from 'react';
import ToolsServices from '../Tools/ToolsServices';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import EasyPayment from './EasyPayment';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsServices></ToolsServices>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <EasyPayment></EasyPayment>
            <Contact></Contact>
        </div>
    );
};

export default Home;