import { styled } from "styled-components";
import AllBlogs from "../features/AllBlogs";
import { StyledButton } from "../ui/Button";
import { Link } from "react-router-dom";
import { useGetUser } from "../features/auth/useGetUser";
import { StyledHeading } from "../ui/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function Overview() {
  const { isAuthenticated } = useGetUser();
  return (
    <StyledDiv>
      {isAuthenticated && (
        <Link to="/blogs/crud">
          <StyledButton variation="primary">Add New Blog</StyledButton>
        </Link>
      )}
      {!isAuthenticated && <StyledHeading as="h3">All Blogs</StyledHeading>}
      <AllBlogs />
    </StyledDiv>
  );
}

export default Overview;
