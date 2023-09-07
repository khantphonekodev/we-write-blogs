import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { singup } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateSignup, isLoading } = useMutation({
    mutationFn: ({ email, password }) => singup(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },

    onError: () => {
      // console.log("hello error");
      // console.log("ERROR", err.message);
      toast.error("There is an error in creating new error");
    },
  });

  return { mutateSignup, isLoading };
}
