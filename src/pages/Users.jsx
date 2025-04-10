import React from "react";
import { filterUsersByQuery } from "../utils/filterUser";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import { useUser } from "../context/UserContext";

const Users = () => {
  const { users, page, setPage, totalPages, searchQuery } = useUser();

  const filteredUsers = filterUsersByQuery(users, searchQuery);

  return (
    <div className="text-white px-6 py-5 max-w-7xl mx-auto">
      <Searchbar />
      <UserList users={filteredUsers} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Users;
