import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateLogin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },

    onError: () => {
      // console.log("hello error");
      // console.log("ERROR", err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { mutateLogin, isLoading };
}
