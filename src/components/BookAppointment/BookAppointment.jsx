import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DoctorsData from '../../data/data';
import toast from 'react-hot-toast';

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = DoctorsData.find(doc => doc.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email))
      newErrors.email = 'Email is invalid';

    if (!formData.date) newErrors.date = 'Date is required';
    else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.date = 'Date cannot be in the past';
    }

    if (!formData.time) newErrors.time = 'Time is required';
    else {
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
      const now = new Date();
      if (selectedDateTime < now)
        newErrors.time = 'Time cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      ...formData,
    };

    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    existing.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(existing));

    toast.success('Appointment booked successfully!');
    setSubmitted(true);

    setTimeout(() => {
      navigate('/my-appointments');
    }, 2000);
  };

  if (!doctor) {
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Doctor not found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Book Appointment with {doctor.name}
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 text-lg font-semibold">
            Appointment booked! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-teal-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Patient Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-teal-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-teal-500 ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-teal-500 ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a time slot</option>
                {doctor.availabilitySlots &&
                  doctor.availabilitySlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
              </select>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
            >
              Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
