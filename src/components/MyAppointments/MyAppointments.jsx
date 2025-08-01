import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('appointments') || '[]');
      setAppointments(stored);
    } catch {
      setAppointments([]);
      toast.error('Failed to load appointments data');
    }
  }, []);

  const clearAll = () => {
    if (
      window.confirm(
        'Are you sure you want to clear all your appointments? This action cannot be undone.'
      )
    ) {
      localStorage.removeItem('appointments');
      setAppointments([]);
      toast.success('All appointments cleared!');
    }
  };

  const deleteAppointment = (indexToRemove) => {
    if (window.confirm('Delete this appointment?')) {
      const updated = appointments.filter((_, index) => index !== indexToRemove);
      setAppointments(updated);
      localStorage.setItem('appointments', JSON.stringify(updated));
      toast.success('Appointment deleted');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-teal-700">My Appointments</h1>
        {appointments.length > 0 && (
          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
            aria-label="Clear all appointments"
          >
            Clear All
          </button>
        )}
      </div>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          You have no booked appointments yet.
        </p>
      ) : (
        <ul className="space-y-6">
          {appointments.map((item, index) => {
            const key = `${item.doctorId}-${item.date}-${item.time}-${item.email}`;
            return (
              <li
                key={key}
                className="relative bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <Link
                  to={`/doctorsDetails/${item.doctorId}`}
                  className="block text-xl font-semibold text-teal-600 hover:underline mb-2"
                >
                  Dr. {item.doctorName}
                </Link>
                <p className="text-gray-700">
                  <span className="font-medium">Patient:</span> {item.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> {item.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Date & Time:</span> {item.date} at {item.time}
                </p>
                <button
                  onClick={() => deleteAppointment(index)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow text-sm transition"
                  aria-label={`Delete appointment with Dr. ${item.doctorName} on ${item.date} at ${item.time}`}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MyAppointments;
