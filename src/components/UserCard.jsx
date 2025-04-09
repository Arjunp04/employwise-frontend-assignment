import React from "react";
import { useNavigate } from "react-router";
import {toast } from "react-toastify";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // Fake delete for demo purposes
    toast.success(`Deleted ${user.first_name}`);
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black  rounded-xl p-6 text-center shadow-lg">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-700 object-cover"
      />
      <h3 className="text-xl font-semibold">
        {user.first_name} {user.last_name}
      </h3>
      <p className="text-gray-300 text-sm mb-4">{user.email}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate(`/user/edit/${user.id}`)}
          className="px-4 py-2 rounded bg-green-500 hover:bg-green-500/80 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-600/80 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
