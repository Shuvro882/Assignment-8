import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const AppsCard = ({ app }) => {
    const {image,title,ratingAvg,downloads} = app;
    return (
<div className="card bg-base-120 shadow-sm hover:scale-105 transition ease-in-out">
  <figure className='aspect-[4/3] overflow-hidden p-3'>
  <img className='w-full h-full object-cover' src={image} alt="AppsImage" />
</figure>
  <div className="card-body p-2 pt-1">
    <h2 className="card-title mb-1">{title}</h2>
    
    <div className="card-actions flex justify-between">
      
      <button className='btn text-[#00D390] text-sm bg-[#F1F5E8]'><a><img className='w-3 h-4' src={download} alt="" /></a>{downloads}</button>
      <button className="btn text-[#FF8811] text-sm bg-[#FFF0E1]"><a><img className='w-3 h-4' src={rating} alt="" /></a>{ratingAvg}</button>
      </div>

  </div>
</div>
    );
};

export default AppsCard;