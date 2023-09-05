import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../services/apiBlogs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateDeleteBlog, isLoading: isDeletingBlog } = useMutation({
    mutationFn: (id) => deleteBlog(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog deleted successfully");
      navigate("/");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { mutateDeleteBlog, isDeletingBlog };
}
