import React, { useEffect, useState } from "react";
import { fetchUserById, updateUserById } from "../services/apiFunctions";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
        });
      } catch (error) {
        toast.error("Failed to fetch user", { autoClose: 1500 });
      }
    };

    getUserData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { first_name, last_name, email } = formData;
    if (!first_name.trim() || !last_name.trim() || !email.trim()) {
      toast.error("All fields are required", { autoClose: 1200 });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email", { autoClose: 1200 });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
        const updatedUser = await updateUserById(id, formData);
        console.log(updatedUser);
      toast.success("User updated", { autoClose: 1200 });
      setFormData({
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        email: updatedUser.email,
      });
    } catch (error) {
      toast.error("Update failed", { autoClose: 1200 });
    }
  };

  const handleCancel = () => {
    navigate("/users");
  };

  return (
    <div className="flex items-center justify-center px-4">
      {!user ? (
        <div className="text-center text-white text-xl">Loading...</div>
      ) : (
        <div className="w-full max-w-xl p-8   bg-gradient-to-br from-gray-800 via-black to-gray-800  text-white rounded-xl shadow-lg mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Edit User</h2>

          <div className="flex flex-col items-center mb-6">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-green-500 shadow-md"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter email"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditUser;
