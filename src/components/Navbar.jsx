import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 1000,
    });
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-4 sm:px-6 py-5 flex justify-between items-center shadow-md">
      {/* Left: Logo and brand */}
      <div className="flex items-center space-x-2 font-bold text-xl">
        {/* 🚀 */}
        <span className="text-white"> UserApp</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="space-x-3 sm:space-x-6 font-medium text-lg">
        <Link to="/" className="hover:text-purple-400 transition">
          Home
        </Link>
        <Link to="/users" className="hover:text-purple-400 transition">
          Users
        </Link>
      </div>

      {/* Right: Auth-related actions */}
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <FaUserCircle size={28} title="Profile" className="" />
            <button
              onClick={handleLogout}
              className="flex items-center text-red-500 hover:text-red-400 transition cursor-pointer"
              title="Logout"
            >
              <FiLogOut size={24} />
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-blue-400 transition text-sm sm:text-base"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
