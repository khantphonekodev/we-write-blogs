import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBlog } from "../services/apiBlogs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useUpdateBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateUpdateBlog, isLoading: isUpdatingBlog } = useMutation({
    mutationFn: ({ newBlog, idToUpdate }) =>
      createEditBlog(newBlog, idToUpdate),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog updated successfully");
      navigate("/");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { mutateUpdateBlog, isUpdatingBlog };
}
