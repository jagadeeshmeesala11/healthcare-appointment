
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page not found</p>
        <p className="text-gray-500 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
