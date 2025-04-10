import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useUser } from "../context/UserContext";

const Searchbar = () => {
  const { setSearchQuery } = useUser();
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputSearch.trim().toLowerCase());
    }, 500); // debounce delay

    return () => clearTimeout(timer);
  }, [inputSearch, setSearchQuery]);

  const handleClearSearch = () => {
    setInputSearch("");
    setSearchQuery("");
  };

  return (
    <div className="flex items-center gap-2 bg-black/5 ring ring-gray-400 focus-within:ring-gray-600 rounded-lg px-4 py-2 relative">
      <FaSearch className="text-gray-600" />
      <input
        type="text"
        placeholder="Search by firstname, lastname or email..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        className=" text-gray-800 focus:outline-none w-full"
      />
      {/* Show cancel icon only if there's a search input */}
      {inputSearch && (
        <button onClick={handleClearSearch} className="absolute right-2 top-2">
          <FaTimes
            size={25}
            className="text-gray-600 hover:text-red-500 cursor-pointer hover:bg-gray-300 rounded-full p-1 transition-all duration-200"
          />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
