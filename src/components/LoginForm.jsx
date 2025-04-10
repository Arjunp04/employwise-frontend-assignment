import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const LoginForm = ({ formAction, isPending }) => {
  return (
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
        className="bg-gradient-to-r from-blue-600 to-purple-800 hover:from-purple-700 hover:to-blue-600 text-white w-full py-2 rounded shadow-lg transition cursor-pointer disabled:opacity-50 font-medium"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
      <Link
        to="/"
        className="text-sm text-blue-400 hover:underline flex items-center gap-2 justify-center mt-4"
      >
        <FaArrowLeftLong /> Back to Home
      </Link>
    </form>
  );
};

export default LoginForm;
