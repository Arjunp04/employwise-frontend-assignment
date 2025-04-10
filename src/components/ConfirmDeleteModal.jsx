import React from "react";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm mx-6">
        <p className="text-gray-800 text-center mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-300/80 text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
