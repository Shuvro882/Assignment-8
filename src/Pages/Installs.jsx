import React, { useEffect, useState } from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installs = () => {
    const [sortDownload, setSortDownload] = useState('none')
    const [installList, setInstallList] = useState([])
    
    useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('installation'))
    if(savedList) setInstallList(savedList)
    },[])

   const sortedItem = (() => {
    if (sortDownload === 'downloads-asc') {
        return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortDownload === 'downloads-desc') {
        return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
        return installList;
    }
})();


const handleRemove = id => {
    const existingList = JSON.parse(localStorage.getItem('installation'))
    let updatedList = existingList.filter(p => p.id !== id)
    
    setInstallList(prev => prev.filter(p =>p.id !== id))
    localStorage.setItem('installation', JSON.stringify(updatedList));
    toast.success('App uninstall successfully!');
}



    return (
      <div className='max-w-screen-2xl w-full sm:px-4 md:px-8 lg:px-12 sm:py-4 md:py-7 lg:py-10'>
                <div className=' mx-auto text-center'>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                     Your Installed Apps
                    </h1>
                    <p className='text-[#627382] my-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between my-4'>
                    <h3 className='text-2xl font-semibold'>
                        <span>({installList.length})
                        </span>Apps found
                    </h3>
                  
                  <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortDownload}
                        onChange={e => setSortDownload(e.target.value)}
                    >
                        <option value="none">Sort by Download</option>
                        <option value="downloads-asc">Low-&gt;High</option>
                        <option value="downloads-desc">High-&gt;Low</option>
                    </select>
                </label>
                
                </div>

        <div className='space-y-6'>
            {sortedItem.map(a => (
                    <div key={a.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition w-full">
  
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
  
                     <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                      src={a.image}
                      alt="App Icon"
                      className="object-cover w-full h-full"/>
                      </div> 

                    <div>
                    <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">
                    {a.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-1">
                    {/* Downloads */}
                    <span className="flex items-center gap-1">
                    <img src={download} alt="downloads" className="w-4 h-4 object-contain" />
                    <span className='text-[#00D390]'>{a.downloads}M</span>
                    </span>

                     {/* Ratings */}
                    <span className="flex items-center gap-1">
                    <img src={rating} alt="ratings" className="w-4 h-4 object-contain" />
                    <span className='text-[#FF8811]'>{a.ratingAvg}</span>
                    </span>

                 {/* Size */}
                <span className="flex items-center gap-1">
                  <span className="text-gray-500">{a.size} MB</span>
                </span>
                 </div>

                  </div>
                 </div>

                   {/* Right Side: Uninstall Button */}
              <div className="flex justify-end sm:justify-center">
                  <button onClick={() => handleRemove(a.id)}
                   className="bg-green-500 hover:bg-green-600 text-white text-sm px-5 py-2 rounded-md font-semibold transition w-full sm:w-auto">
                  Uninstall
                </button>
              </div>
            </div>


                ))}

            </div>
            <ToastContainer position="top-right" autoClose={2000} />

      </div>
    );
};

export default Installs;