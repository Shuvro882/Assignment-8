import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../Components/LoadingSpinner';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((p) => String(p.id) === id);

  
  useEffect(() => {
    if (app) {
      const existingList = JSON.parse(localStorage.getItem('installation')) || [];
      const alreadyInstalled = existingList.some((item) => item.id === app.id);
      if (alreadyInstalled) {
        setIsInstalled(true);
      }
    }
  }, [app]);

  if (loading) return <LoadingSpinner></LoadingSpinner>
  if (error) return <p className="text-red-500">{error}</p>;
  if (!app) return <p className="text-gray-500 text-center">App not found</p>;

  const { title, image, description, companyName, reviews, ratingAvg, downloads, size } = app || {};

  
  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const alreadyInstalled = existingList.some((item) => item.id === app.id);

    if (alreadyInstalled) {
      toast.info('App already installed!');
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem('installation', JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success('App installed successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-md my-3">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* App Icon */}
        <div className="w-50 h-58 flex items-center justify-center bg-blue-50 rounded-md">
          <img src={image} alt="App Icon" className="w-60 h-90 object-contain" />
        </div>

        {/* App Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">
            Developed by{' '}
            <a href="#" className="text-blue-600 hover:underline">
              {companyName}
            </a>
          </p>
          <hr className="my-3 border-gray-200" />

          {/* Stats Section */}
          <div className="flex flex-wrap gap-10 mt-4 text-sm">
            <div>
              <img src={download} alt="" />
              <p className="text-gray-600">Downloads</p>
              <p className="text-4xl font-bold">{downloads}</p>
            </div>
            <div>
              <img src={rating} alt="" />
              <p className="text-gray-600">Average Ratings</p>
              <p className="text-4xl font-bold">{ratingAvg}</p>
            </div>
            <div>
              <img src={review} alt="" />
              <p className="text-gray-600">Total Reviews</p>
              <p className="text-4xl font-bold">{reviews}</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleAddToInstallation}
            disabled={isInstalled}
            className={`mt-3 px-5 py-2 text-sm font-semibold rounded-md ${
              isInstalled
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />


<div className="mt-6">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h2>

  <div className="bg-white p-4 rounded-lg shadow-sm">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={[...app.ratings].reverse()}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <XAxis
          type="number"
          domain={[0, 'dataMax + 1000']}
          tickFormatter={(value) => `${value}`}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#374151" }}
          width={70}
        />
        <Tooltip formatter={(value) => `${value}`} />
        <Bar dataKey="count" fill="#FFA500"  />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

<hr className="my-6 border-gray-200" />

      {/* Description Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AppsDetails;
