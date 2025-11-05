import React from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';

const Apps = () => {
    const { apps } = useApps()
    return (
             
               
                
                <div className='max-w-screen-2xl w-full sm:px-4 md:px-8 lg:px-12 sm:py-4 md:py-7 lg:py-10'>
                <div className=' mx-auto justify-center text-center'>
                    <h1 className='font-bold text-5xl'>Our All Applications</h1>
                    <p className='text-[#627382] my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between my-4'>
                    <h3 className='text-2xl font-semibold'>(16) Apps found</h3>
                    <button className='btn btn-outline font-bold'>Search</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {apps.map(app => (
                <AppsCard key={app.id} app={app} />
            ))}
            </div>
            </div>
               
    );
};

export default Apps;