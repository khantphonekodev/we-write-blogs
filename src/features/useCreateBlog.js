import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBlog } from "../services/apiBlogs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateCreateBlog, isLoading: isCreatingBlog } = useMutation({
    mutationFn: (newBlog) => createEditBlog(newBlog),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog created successfully");
      navigate("/");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { mutateCreateBlog, isCreatingBlog };
}
