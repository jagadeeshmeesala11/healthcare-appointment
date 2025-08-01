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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-teal-700">Doctor's Appointment</h1>
      </div>

      <div className="mb-8 flex justify-center">
        <input
          type="search"
          aria-label="Search doctors by name or specialization"
          placeholder="Search Doctors"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full sm:w-3/4 md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.length > 0 ? (
            filteredList.map((item) => <DoctorsCard key={item.id} {...item} />)
          ) : (
            <p className="text-center col-span-full text-gray-500">No doctors found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
