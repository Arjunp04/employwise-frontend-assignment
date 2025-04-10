import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p className="text-center col-span-full text-gray-400 my-28">
          No user found.
        </p>
      )}
    </div>
  );
};

export default UserList;
