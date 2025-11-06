import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';

const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)
    ) : apps
    
   
    return (
             <div className='max-w-screen-2xl w-full sm:px-4 md:px-8 lg:px-12 sm:py-4 md:py-7 lg:py-10'>
                <div className=' mx-auto justify-center text-center'>
                    <h1 className='font-bold text-5xl'>Our All Applications</h1>
                    <p className='text-[#627382] my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between my-4'>
                    <h3 className='text-2xl font-semibold'><span>({searchApps.length})</span>Apps found</h3>
<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input 
  value={search}
  onChange={e=> setSearch(e.target.value)} 
  type="search" 
  required placeholder="search Apps" />
</label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {searchApps.map(app => (
                <AppsCard key={app.id} app={app} />
            ))}
            </div>
            </div>
               
    );
};

export default Apps;