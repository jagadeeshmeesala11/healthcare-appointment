import React from 'react'
import {Link} from 'react-router-dom'
const DoctorsCard = ({id,
  name,
  specialization,
  image,
  availability,}) => {
  return (
    <li className="w-full sm:w-[280px] bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
  <Link to={`/doctorsDetails/${id}`} className="flex flex-col items-center space-y-2 group">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover border-2 border-teal-500 group-hover:scale-105 transition-transform duration-200"
    />
    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-700 transition-colors duration-200">
      {name}
    </h2>
    <p className="text-sm text-gray-500">{specialization}</p>
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        availability === 'Available'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      {availability}
    </span>
  </Link>
</li>


  )
}

export default DoctorsCard
