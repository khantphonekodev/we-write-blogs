/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useGetUser } from "./useGetUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  //Load the current User from supabase
  const { isGettingUser, isAuthenticated } = useGetUser();

  //if not authencticated
  useEffect(
    function checkAuth() {
      if (!isAuthenticated && !isGettingUser)
        navigate("/login", { replace: true });
    },
    [isAuthenticated, isGettingUser, navigate]
  );

  if (isGettingUser) return <Spinner />;

  return children;
}

export default ProtectedRoutes;
