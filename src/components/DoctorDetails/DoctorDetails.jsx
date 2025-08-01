import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DoctorsData from '../../data/data';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = DoctorsData.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl text-red-600 font-semibold">Doctor not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-4xl w-full bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row gap-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-teal-500 mx-auto sm:mx-0"
        />

        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
          <p className="text-sm text-gray-500">{doctor.specialization}</p>
          <p className="text-gray-600">{doctor.about}</p>

          <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-700">
            {doctor.experience && (
              <p><strong>Experience:</strong> {doctor.experience}</p>
            )}
            {doctor.consultationFee && (
              <p><strong>Fee:</strong> {doctor.consultationFee}</p>
            )}
            {doctor.contactEmail && (
              <p><strong>Email:</strong> {doctor.contactEmail}</p>
            )}
            {doctor.phone && (
              <p><strong>Phone:</strong> {doctor.phone}</p>
            )}
            {doctor.location && (
              <p><strong>Location:</strong> {doctor.location}</p>
            )}
            {doctor.languages && (
              <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
            )}
            <p>
              <strong>Availability:</strong>{' '}
              <span
                className={
                  doctor.availability === 'Available'
                    ? 'text-green-600 font-medium'
                    : 'text-red-600 font-medium'
                }
              >
                {doctor.availability}
              </span>
            </p>
            {doctor.availabilitySlots && (
              <p>
                <strong>Time Slots:</strong> {doctor.availabilitySlots.join(', ')}
              </p>
            )}
          </div>

          {doctor.availability === 'Available' ? (
            <Link
              to={`/book-appointment/${doctor.id}`}
              className="mt-6 inline-block px-5 py-2 rounded font-medium bg-teal-600 text-white hover:bg-teal-700 transition"
            >
              Book Appointment
            </Link>
          ) : (
            <button
              disabled
              className="mt-6 px-5 py-2 rounded font-medium bg-gray-300 text-gray-600 cursor-not-allowed"
            >
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
