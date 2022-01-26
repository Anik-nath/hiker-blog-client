import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user,isloading } = useAuth();
  
  let location = useLocation();

  if(isloading){
    return <LinearProgress color="success" />
   }

  if (user.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
