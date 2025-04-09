import React from "react";
import { useAuth } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Users = () => {
  const { users, page, setPage, totalPages } = useAuth();

  const handlePageClick = (pageNumber) => {
    if (page !== pageNumber) {
      setPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${
            page === i
              ? "bg-black text-white "
              : " text-black bg-gray-100 hover:bg-gray-200 border-gray-400 border"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="text-white px-6 py-10 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-black text-white hover:bg-gray-950 disabled:opacity-50 cursor-pointer text-sm"
        >
          <FaArrowLeft /> Prev
        </button>

        {renderPageNumbers()}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="flex items-center justify-center gap-2 px-3 py-1.5 rounded bg-black text-white hover:bg-gray-950 disabled:opacity-50 cursor-pointer text-sm"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Users;
