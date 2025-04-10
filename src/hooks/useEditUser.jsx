import { useEffect, useState } from "react";
import { fetchUserById, updateUserById } from "../services/apiFunctions";
import { toast } from "react-toastify";

export const useEditUser = (id, setUsers, page, navigate) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch {
        toast.error("Failed to fetch user", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    };

    getUserData();
  }, [id]);

  const updateUser = async () => {
    try {
      setLoading(true);
      const { first_name, last_name, email, id: userId, avatar } = user;
      const response = await updateUserById(id, {
        first_name,
        last_name,
        email,
      });

      const updatedUser = { ...response, id: userId, avatar };

      toast.success("User updated", {
        position: "top-center",
        autoClose: 1000,
      });

      setUsers((prevUsers) => {
        const updatedList = prevUsers.map((u) =>
          u.id === userId ? updatedUser : u
        );

        const localKey = `users-page-${page}`;
        const storedPageData = sessionStorage.getItem(localKey);
        if (storedPageData) {
          const parsed = JSON.parse(storedPageData);
          const newPageData = parsed.data.map((u) =>
            u.id === userId ? updatedUser : u
          );
          sessionStorage.setItem(
            localKey,
            JSON.stringify({ ...parsed, data: newPageData })
          );
        }

        return updatedList;
      });

      navigate("/users");
    } catch {
      toast.error("Update failed", { position: "top-center", autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  return { user, setUser, loading, updateUser };
};
