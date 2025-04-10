import React, { useEffect } from "react";
import { useActionState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useLoginAction } from "../hooks/useLoginAction";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const loginAction = useLoginAction();
  const navigate = useNavigate();
  const  { login } = useAuth(); 

  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    token: null,
    error: null,
  });

  useEffect(() => {
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
      <LoginForm formAction={formAction} isPending={isPending} />
    </div>
  );
};

export default Login;
