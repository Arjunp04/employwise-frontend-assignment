import { toast } from "react-toastify";
import { deleteUserById } from "../services/apiFunctions";
import { useUser } from "../context/UserContext";


export const useDeleteUser = () => {
  const { deleteUserFromStorage } = useUser();

  const deleteUser = async (userId, userName) => {
    try {
      await deleteUserById(userId);
      deleteUserFromStorage(userId);
      toast.success(`${userName} has been deleted`, {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (error) {
      toast.error("Failed to delete user", {
        position: "top-center",
        autoClose: 1000,
      });
      throw error;
    }
  };

  return { deleteUser };
};
