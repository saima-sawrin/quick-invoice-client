import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../Asset/hero-svg-1.webp';

const Hero = () => {
    return (
        <div >
   

    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
            Free invoicing software for<br className="hidden md:block" />
            small businesses{' '}
             
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-600 md:text-lg">
            Quick Invoice is online invoicing software that helps you craft professional invoices, send payment reminders, keep track of expenses, log your work hours, and get paid faster—all for free!
            </p>
            <button className='bg-primary text-white px-3 py-3 shadow-md rounded'><Link to='/login'>LogIn or Create Account</Link></button>
          </div>
          
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className=" w-full  rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={hero}
          alt=""
          
        />
      </div>
    </div>
 
        </div>
    );
};

export default Hero;