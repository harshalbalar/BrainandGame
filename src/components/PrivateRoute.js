// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../services/authService";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!getToken();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
