import React from 'react';
import { Link } from 'react-router';
import AppError from '../assets/App-Error.png';

const AppNot = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-10 text-center mt-10">
          <img
            src={AppError}
            alt="No results"
            className="w-50 h-60 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-gray-500">The App you are requesting is not found on our system.  please try another apps</p>
         
          <Link to='/' className='mt-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl p-3'>Go back</Link>
                     
        </div>
    );
};

export default AppNot;