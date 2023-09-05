import { useQuery } from "@tanstack/react-query";
import { getRecentBlogs } from "../services/apiBlogs";

export function useGetRecentBlogs() {
  const { data: recentBlogs, isLoading: isGettingRecent } = useQuery({
    queryKey: ["blogs", "recent"],
    queryFn: getRecentBlogs,
  });

  return { recentBlogs, isGettingRecent };
}
