import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

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
    token && location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/404";

  return (
    <>
      <Suspense
        fallback={
          <div className="text-black flex justify-center mt-72">Loading...</div>
        }
      >
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
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
