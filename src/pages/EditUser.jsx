import React from "react";
import { useNavigate, useParams } from "react-router";
import { useEditUser } from "../hooks/useEditUser";
import { toast } from "react-toastify";
import EditUserForm from "../components/EditUserForm";
import { validateEditForm } from "../utils/editValidation";
import { useUser } from "../context/UserContext";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setUsers, page } = useUser();

  const { user, setUser, loading, updateUser } = useEditUser(
    id,
    setUsers,
    page,
    navigate
  );

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateEditForm(user);
    if (!validation.valid) {
      toast.error(validation.message, { autoClose: 1200 });
      return;
    }
    updateUser();
  };

  const handleCancel = () => navigate("/users");

  return (
    <div className="flex items-center justify-center px-4">
      {!user ? (
        <div className="text-center text-white text-xl">Loading...</div>
      ) : (
       
          <div className="w-full max-w-xl p-8 bg-gradient-to-br from-gray-800 via-black to-gray-800 text-white rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-bold text-center mb-6">Edit User</h2>

            <div className="flex flex-col items-center mb-6">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-28 h-28 rounded-full border-4 border-green-500 shadow-md"
              />
            </div>

            <EditUserForm
              user={user}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
      )}
    </div>
  );
};

export default EditUser;
