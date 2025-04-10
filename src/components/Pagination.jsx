import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${
            currentPage === i
              ? "bg-black text-white"
              : "text-black bg-gray-100 hover:bg-gray-200 border border-gray-400"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-black text-white hover:bg-gray-950 disabled:opacity-50 cursor-pointer text-sm tracking-wide"
      >
        <FaArrowLeft /> Prev
      </button>

      {renderPageNumbers()}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-black text-white hover:bg-gray-950 disabled:opacity-50 cursor-pointer text-sm tracking-wide"
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
