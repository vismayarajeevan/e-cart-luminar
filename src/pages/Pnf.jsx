import React from 'react'
import { FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pnf = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
          </div>
          <FileQuestion className="h-24 w-24 text-blue-800 relative mx-auto" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-3 px-8 rounded-lg hover:from-blue-900 hover:to-indigo-950 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Pnf