import React from 'react';
import { Link } from 'react-router-dom';

const DoctorsCard = ({ id, name, specialization, image, availability }) => {
  return (
    <li className="w-full bg-gradient-to-tr from-white to-blue-50 border list-none border-indigo-100 rounded-xl p-6 shadow-lg hover:shadow-indigo-200 transition duration-300">
      <Link
        to={`/doctorsDetails/${id}`}
        className="flex flex-col items-center text-center space-y-4 group"
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <span
            className={`absolute -bottom-1 -right-1 text-[10px] px-2 py-0.5 rounded-full font-semibold ${
              availability === 'Available'
                ? 'bg-green-600 text-white'
                : 'bg-gray-400 text-white'
            }`}
          >
            {availability}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-800 group-hover:text-indigo-700 tracking-wide">
            {name}
          </h2>
          <p className="text-sm font-medium text-gray-500">{specialization}</p>
        </div>

        <button className="mt-2 px-4 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition">
          View Profile
        </button>
      </Link>
    </li>
  );
};

export default DoctorsCard;
