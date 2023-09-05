import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../services/apiBlogs";
import { useSearchParams } from "react-router-dom";

export function useGetBlogs() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const category = searchParams.get("category");

  const { data = {}, isLoading: isGettingBlogs } = useQuery({
    queryKey: ["blogs", category, page],
    queryFn: () => getBlogs(page, category),
  });
  const { blogs, count } = data;
  return { blogs, count, isGettingBlogs };
}
