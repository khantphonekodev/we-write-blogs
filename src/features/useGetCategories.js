import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiBlogs";

export function useGetCategories() {
  const { data: categories, isLoading: isGettingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories, isGettingCategories };
}
