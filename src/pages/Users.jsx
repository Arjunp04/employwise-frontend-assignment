import React from "react";
import { useAuth } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Searchbar from "../components/Searchbar";

const Users = () => {
  const { users, page, setPage, totalPages, searchQuery } = useAuth();
  
  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchQuery) ||
      user.last_name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery)
  );

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
    <div className=" text-white px-6 pt-5 max-w-7xl mx-auto">
      <Searchbar />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-center col-span-full text-gray-400 my-28">
            No users found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className=" mt-8 flex justify-center items-center gap-4">
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
