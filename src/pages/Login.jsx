import React from "react";
import { useActionState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/apiFunctions";
import { toast } from "react-toastify";

// Action function
async function handleLoginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Check against default values first
  if (email !== "eve.holt@reqres.in" || password !== "cityslicka") {
    return { success: false, error: "Invalid credentials" };
  }

  try {
    const data = await loginUser(email, password);
    return { success: true, token: data.token };
  } catch (error) {
    return { success: false, error: "Login failed. Try again." };
  }
}

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [state, formAction, isPending] = useActionState(handleLoginAction, {
    success: false,
    token: null,
    error: null,
  });

  React.useEffect(() => {
    if (state.success) {
      login(state.token);
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 1000,
      });

      navigate("/users");
    } else if (state.error) {
      toast.error(state.error, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 to-black text-white px-4">
      <form
        action={formAction}
        className="bg-white/10 border border-white/10 p-8 rounded-xl w-full max-w-sm shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">👋 Welcome Back</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue="eve.holt@reqres.in"
            required
            className="w-full p-2 rounded bg-black/20 text-white border border-gray-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            defaultValue="cityslicka"
            required
            className="w-full p-2 rounded bg-black/20 text-white border border-gray-500"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-gradient-to-r from-blue-600 to-purple-800 hover:from-purple-700 hover:to-blue-600 text-white w-full py-2 rounded shadow-lg transition cursor-pointer disabled:opacity-50"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
