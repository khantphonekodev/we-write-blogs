import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { PillButton } from "../ui/PillButton";
import { useGetCategories } from "./useGetCategories";
import { useNavigate, useSearchParams } from "react-router-dom";

const StyledRecentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 20px;
`;

function BlogCategoires() {
  const { categories = [], isGettingCategories } = useGetCategories();
  const [searchParmas, setSearchParams] = useSearchParams();
  const currentCategory = searchParmas.get("category");
  const navigate = useNavigate();

  function handleClick(category) {
    searchParmas.set("category", category);
    searchParmas.set("page", 1);
    setSearchParams(searchParmas);
    navigate(`/blogs?category=${category}`);
  }
  if (isGettingCategories) return null;

  return (
    <div>
      <StyledHeading as="h4">Categories</StyledHeading>
      <StyledRecentsContainer>
        {categories.map((category) => (
          <PillButton
            key={category}
            onClick={() => handleClick(category)}
            $active={category === currentCategory ? true : false}
          >
            {category}
          </PillButton>
        ))}
      </StyledRecentsContainer>
    </div>
  );
}

export default BlogCategoires;
