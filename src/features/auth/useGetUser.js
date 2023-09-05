import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./getCurentUser";

export function useGetUser() {
  const { data: user, isLoading: isGettingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isGettingUser,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
