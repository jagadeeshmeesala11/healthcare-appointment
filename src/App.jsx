import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyAppointments from './components/MyAppointments/MyAppointments';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound/NotFound';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
