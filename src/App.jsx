import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";

// Lazy loaded components
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const EditUser = lazy(() => import("./pages/EditUser"));
const Navbar = lazy(() => import("./components/Navbar"));

const App = () => {
  const location = useLocation();
  const { token } = useAuth();

  const showNavbar =
    token && location.pathname !== "/" && location.pathname !== "/login";

  return (
    <>
      <Suspense fallback={<div className="text-white p-4">Loading...</div>}>
        {showNavbar && <Navbar />}
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading Login...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading Users...</div>}>
                  <Users />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="user/edit/:id"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading Edit Page...</div>}>
                  <EditUser />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
