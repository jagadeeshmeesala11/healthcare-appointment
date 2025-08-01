import React, { useState, useMemo } from 'react';
import DoctorsData from '../../data/data';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const HomeComponent = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredList = useMemo(() => {
    return DoctorsData.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.specialization.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight drop-shadow-sm">
            Find Your Specialist
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            Search for doctors by name or specialization and book instantly
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <input
            type="search"
            aria-label="Search doctors by name or specialization"
            placeholder="e.g., Cardiologist, Dr. Smith"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full sm:w-3/4 md:w-1/2 px-5 py-3 rounded-lg border border-indigo-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <DoctorsCard key={item.id} {...item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 font-medium">
              No doctors found. Try another search
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
