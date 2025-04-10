import React, { useState } from "react";
import { useNavigate } from "react-router";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useDeleteUser } from "../hooks/useDeleteUser";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const { deleteUser } = useDeleteUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      await deleteUser(user.id, user.first_name);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl p-6 text-center shadow-lg">
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
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-600/80 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete ${user.first_name}?`}
      />
    </>
  );
};

export default UserCard;
