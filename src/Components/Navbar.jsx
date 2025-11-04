import React from 'react';
import Logo from '../assets/logo.png';
import Vec from '../assets/vec.png';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">

       <div className="navbar-start">
       <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>

       <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/apps'>Apps</NavLink></li>
        <li><NavLink to='/installs'>Installation</NavLink></li>
       </ul>
       </div>

       <Link to='/' className='flex items-center justify-center space-x-2 ml-3'>
       <img src={Logo} alt="Company logo" className='w-10'/>
       <span className="text-xl font-bold hover:text-purple-500 transition-colors duration-300">HERO.IO</span>
       </Link>

       </div>
        
        
        <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to='/' className="text-xl font-semibold hover:text-purple-500 transition-colors duration-300 hover:underline">Home</NavLink>
      </li>
      <li>
        <NavLink to='/apps' className="text-xl font-semibold hover:text-purple-500 transition-colors duration-300 hover:underline">Apps</NavLink>
      </li>
      <li>
        <NavLink to='/installs' className="text-xl font-semibold hover:text-purple-500 transition-colors duration-300 hover:underline">Installation</NavLink>
      </li>
    </ul>
        </div>

         <div className="navbar-end">
         <button className="btn btn-sm  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex gap-1 mr-3">
    <img src={Vec} alt="" className='w-5'/>
    Contribute
         </button>
         </div>
      </div>
    );
};

export default Navbar;