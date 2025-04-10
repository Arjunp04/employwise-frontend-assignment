import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (token) {
      navigate("/users");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl  from-gray-800 via-black to-gray-800 text-white flex flex-col items-center justify-center px-4 py-6">
      <div className="flex flex-col justify-center items-center mt-4 mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-white drop-shadow-lg text-center">
          User Management App
        </h2>
        <p className="md:text-lg text-center max-w-lg md:max-w-2xl text-gray-300">
          Manage users with ease, login securely, view users with pagination and
          edit or delete them effortlessly.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <FeatureCard
          icon="🔐"
          title="Secure Login"
          description="Authenticate users with a token-based login using the Reqres API and manage sessions securely."
        />
        <FeatureCard
          icon="📋"
          title="View Users"
          description="Paginated user list with name, email & avatar. Smooth navigation and responsive layout."
        />
        <FeatureCard
          icon="✏️"
          title="Edit & Delete"
          description="Quickly update or remove user details with real-time feedback and seamless API integration."
        />
      </div>

      <button
        onClick={handleGetStarted}
        className="bg-gradient-to-r from-blue-600 to-purple-800 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full transition duration-300 shadow-lg hover:shadow-xl cursor-pointer mt-8 sm:mt-12"
      >
        🚀 Get Started
      </button>
    </div>
  );
};

export default Home;
