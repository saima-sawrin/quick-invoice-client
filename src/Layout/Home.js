import React from 'react';
import { useSelector } from 'react-redux';
import Estimate from '../Components/Estimate/Estimate';
import FAQ from '../Components/FAQ/FAQ';
import Hero from '../Components/Hero/Hero';
import Invoice from '../Components/Invoice/Invoice';
import Review from '../Components/Review/Review';
import Templates from '../Components/Template/Templates';

const Home = () => {
    // const state = useSelector((state)=> state);
    return (
        <div>
         <Hero></Hero>
         <Templates></Templates>
         <Estimate></Estimate>
         <Review></Review>
         <FAQ></FAQ>
        </div>
    );
};

export default Home;