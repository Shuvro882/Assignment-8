import React from 'react';
import hero from '../assets/hero.png'
import GPlay from '../assets/Gplay.png'
import Astore from '../assets/AStore.png'


const Banner = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center px-4 py-10 bg-white" >
             <h1 className="font-extrabold text-4xl md:text-5xl leading-tight mb-3">
             We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps
            </h1>
            <p className='text-gray-600 text-base mb-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2 mt-4'>
                <a href="https://play.google.com/store" target="_blank"rel="noopener noreferrer"className="btn gap-2 font-bold"
>               <img src={GPlay} alt="Google Play" />Google Play
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank"rel="noopener noreferrer"className="btn gap-2 font-bold"
>               <img src={Astore} alt="Google Play" />App Store
                </a>
            </div>
            </div>
            <div className="flex justify-center items-center w-full">
            <img className="object-contain w-full max-w-4xl h-[50vh]" src={hero} alt="Hero" />
            </div>


<section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
  <div className="max-w-6xl mx-auto text-center px-4">
    {/* Headline */}
    <h2 className="text-2xl md:text-3xl font-bold mb-10">
      Trusted by Millions, Built for You
    </h2>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Stat 1 */}
      <div>
        <p className="text-4xl md:text-5xl font-extrabold">29.6M</p>
        <p className="uppercase text-sm md:text-base mt-1">Total Downloads</p>
        <p className="text-sm mt-1 text-purple-200">21% More Than Last Month</p>
      </div>

      {/* Stat 2 */}
      <div>
        <p className="text-4xl md:text-5xl font-extrabold">906K</p>
        <p className="uppercase text-sm md:text-base mt-1">Total Reviews</p>
        <p className="text-sm mt-1 text-purple-200">46% More Than Last Month</p>
      </div>

      {/* Stat 3 */}
      <div>
        <p className="text-4xl md:text-5xl font-extrabold">132+</p>
        <p className="uppercase text-sm md:text-base mt-1">Active Apps</p>
        <p className="text-sm mt-1 text-purple-200">31 More Will Launch</p>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Banner;