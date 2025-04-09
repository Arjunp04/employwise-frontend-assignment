import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import EditUser from "./pages/EditUser";

const App = () => {
  const location = useLocation();
  const { token } = useAuth();

  // Show Navbar only if logged in and not on "/" or "/login"
  const showNavbar =
    token && location.pathname !== "/" && location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="user/edit/:id"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
