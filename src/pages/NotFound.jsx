import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
