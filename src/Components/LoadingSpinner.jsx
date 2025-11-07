import React from 'react';
import Logo from '../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        L
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 animate-spin"
        />
        ading
      </h1>
    </div>
    );
};

export default LoadingSpinner;