import { useParams } from "react-router-dom";
import { getSingleBlog } from "../services/apiBlogs";
import { useQuery } from "@tanstack/react-query";

export function useGetBlog() {
  const { blogId } = useParams();

  const { data: blog, isLoading: isGettingBlog } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getSingleBlog(blogId),
  });

  return { blog, isGettingBlog };
}
