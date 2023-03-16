import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Asset/logo.png';

import { withTranslate, IntlActions, useTranslate } from 'react-redux-multilingual';
import Translator from '../../Translator/Translator';

const Header = () => {

    return (
   <div className='mx-10'>
    <div className="navbar  text-primary shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52">

        <li><Link to='/'>Home</Link></li>
 
        <li><Link to ='/about'>About Invoice</Link></li>
        {/* <li><Link to ='/suggestion'>Suggestion Box</Link></li> */}
       <li>  <Translator></Translator></li>
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" className='w-20' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
  
       <li><Link to ='/about'>About Invoice</Link></li>
       {/* <li><Link to ='/suggestion'>Suggestion Box</Link></li> */}
 <li>     <Translator></Translator></li>
    </ul>
  </div>
  <div className="navbar-end ">
  
    <Link to='/invoice' className="btn btn-outline  text-primary hover:bg-primary hover:text-white">Create Invoice</Link>

  </div>
</div>
   </div>

    );
};

export default Header;