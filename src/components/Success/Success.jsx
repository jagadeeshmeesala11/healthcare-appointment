import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { appointment } = location.state || {};

  if (!appointment) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center px-4">
        <div>
          <h2 className="text-xl text-red-600 font-semibold">No appointment data found</h2>
          <Link to="/" className="text-teal-600 mt-4 block hover:underline">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">✅ Appointment Confirmed!</h2>
        <p className="text-gray-700 mb-4">Thank you, {appointment.name}. Your appointment with <strong>Dr. {appointment.doctorName}</strong> has been successfully booked.</p>
        <p className="text-gray-600 mb-2">📅 {appointment.date}</p>
        <p className="text-gray-600 mb-4">⏰ {appointment.time}</p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/my-appointments"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            View My Appointments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
