import React from "react";

const EditUserForm = ({ user, loading, onChange, onSubmit, onCancel }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-gray-300 mb-1">First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name || ""}
          onChange={onChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md"
          placeholder="Enter first name"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name || ""}
          onChange={onChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md"
          placeholder="Enter last name"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={user.email || ""}
          onChange={onChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-500 rounded-md"
          placeholder="Enter email"
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
