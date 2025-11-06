import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
  <img src={error} alt="Error" className="mb-4" />
  <h1 className="text-5xl font-bold mb-2">Oops, page not found!</h1>
  <p className="mb-2">The page you are looking for is not available.</p>
  <Link to={'/'} className="btn btn-primary text-xl mt-4">Go Back</Link>
</div>

    );
};

export default ErrorPage;