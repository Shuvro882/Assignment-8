import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import Banner from './banner';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    
    const { apps } = useApps()
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const trendingApps = apps.slice(0, 8);

  if (loading) {
    return <LoadingSpinner />;
  }
    
  
  return (
        
        <div>
            <div>
                 <Banner></Banner>
            </div>
            <div className='flex flex-col justify-center items-center text-center px-4 py-5'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='max-w-screen-2xl w-full sm:px-4 md:px-8 lg:px-12 sm:py-4 md:py-7 lg:py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {trendingApps.map(app => (
                <AppsCard key={app.id} app={app} />
            ))}
            </div>
            <div className='flex justify-center items-center mx-auto my-5'>
                <Link to='/Apps' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-xl p-3 rounded-xl'>Show All</Link>
            </div>
            </div>
        </div>
    );
};

export default Home;