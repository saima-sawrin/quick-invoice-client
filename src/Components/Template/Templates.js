import React from 'react';
import { FaSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import t1 from '../../Asset/Template/1.png';
import t2 from '../../Asset/Template/2.png';
import t3 from '../../Asset/Template/3.png';
import t4 from '../../Asset/Template/4.png';
import t5 from '../../Asset/Template/5.png';
import t6 from '../../Asset/Template/6.png';

const Templates = () => {
    return (
        <div>
        
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p> */}
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choice </span>
          </span>{' '}
         Your Invoice template Design
        </h2>
      
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full md:h-64 xl:h-full"
              src={t1}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <label htmlFor="my-modal-3" className="btn bg-white p-3 border-0 text-black hover:bg-primary hover:text-white rounded-none">Get Invoice</label>
           
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full md:h-64 xl:h-full"
              src={t2}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            
            <label htmlFor="my-modal-3" className="btn bg-white p-3 border-0 text-black hover:bg-primary hover:text-white rounded-none">Get Invoice</label>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full md:h-64 xl:h-full"
              src={t3}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <label htmlFor="my-modal-3" className="btn bg-white p-3 border-0 text-black hover:bg-primary hover:text-white rounded-none">Get Invoice</label>
             
            
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-full md:h-64 xl:h-full"
              src={t4}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <label htmlFor="my-modal-3" className="btn bg-white p-3 border-0 text-black hover:bg-primary hover:text-white rounded-none">Get Invoice</label>
            </div>
          </div>
        </div>
      
       

        <button className='bg-primary text-white py-3 rounded-md items-center justify-center  '>
        <Link to='/invoice'>View All Invoice Template</Link>
        </button>
      
      </div>
    </div>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p className="py-4 bg-yellow-400 text-center">To print, download or send your invoice, we have to save it first.
Please Sign Up For Free.</p>
<div className='text-center mx-5' > 
<p className='text-center'>Please Enter Your Email Address Below</p>
<input type="text"className='border-1 border-black p-2 text-center mx-auto bg-gray-200 w-20px'  />
<br />
<button className='bg-primary p-3 my-1 text-white items-center'><Link to='/invoice'>Continue to your invoice</Link></button>
<p>Have an account already? please <span><Link to='/login' className='text-blue-600' >Signin</Link></span></p>
</div>

  </div>
</div>
       
        </div>
    );
};

export default Templates;