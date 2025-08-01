
# Healthcare Appointment Booking App

A simple, responsive React application to view doctors, check their availability, and book appointments. Built using React, React Router, and Tailwind CSS with localStorage-based data persistence.

---

## Features

- **Home Page:** Browse and search doctors by name or specialization.  
- **Doctor Details:** View detailed profile and availability.  
- **Book Appointment:** Fill a form to book an appointment with validation.  
- **My Appointments:** View, delete, or clear your booked appointments.  
- **Responsive Design:** Works well on desktop and mobile devices.  
- **Toast Notifications:** Success and error feedback via react-hot-toast.

---

## Tech Stack & Libraries

- React (Functional Components and Hooks)  
- React Router (Client-side routing)  
- Tailwind CSS (Utility-first styling)  
- react-hot-toast (User notifications)  
- LocalStorage (Persist appointments data)

---

## Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/jagadeeshmeesala11/healthcare-appointment.git
   cd healthcare-appointment-app
   ```

2. Install dependencies:  
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:  
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## Improvements (If More Time Available)

- Add a backend API with Node.js/Express to store data securely.  
- Implement user authentication and login for patients and doctors.  
- Enhance appointment validation (e.g., no double booking).  
- Add calendar integration and reminders.  
- Improve accessibility (ARIA attributes, keyboard navigation).  
- Add animations and more advanced UI feedback.  
- Use TypeScript for static typing and better developer experience.

---

## Challenges Faced & Solutions

- **State management:** Chose React hooks and localStorage for simplicity.  
- **Form validation:** Implemented client-side checks for required fields and valid email format.  
- **Routing state:** Passed appointment data via React Router `location.state` to the success page.  
- **Responsive UI:** Used Tailwind CSS utility classes to build a mobile-friendly layout.  
- **Toast positioning:** Customized react-hot-toast to show notifications at screen center for better visibility.

---

## License

MIT License © 2025 Meesala Jagadeesh
