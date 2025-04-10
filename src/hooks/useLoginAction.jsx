import { loginUser } from "../services/apiFunctions";

export const useLoginAction = () => {
  async function loginAction(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email !== "eve.holt@reqres.in" || password !== "cityslicka") {
      return { success: false, error: "Invalid credentials" };
    }

    try {
      const data = await loginUser(email, password);
      return { success: true, token: data.token };
    } catch {
      return { success: false, error: "Login failed. Try again." };
    }
  }

  return loginAction;
};
