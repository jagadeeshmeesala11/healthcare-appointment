import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyAppointments from './components/MyAppointments/MyAppointments';
import Success from './components/Success/Success';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
     <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            minWidth: '300px',
            textAlign: 'center',
          },
        }}
      />
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/doctorsDetails/:id" element={<DoctorDetails />} />
        <Route exact path='/book-appointment/:id' element={<BookAppointment />} />
        <Route exact path="/my-appointments" element={<MyAppointments />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
