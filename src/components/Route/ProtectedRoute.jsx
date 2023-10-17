import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, isAdmin }) => {
  const { loading, isAutheticated, user } = useSelector((state) => state.user);
  return (
    !loading &&
    isAutheticated &&
    (isAutheticated === true ? (
      isAdmin === true && user.role !== "admin" ? (
        <Navigate to={"/login"} />
      ) : (
        <Component />
      )
    ) : (
      <Navigate to="/login" />
    ))
  );
};

export default ProtectedRoute;
