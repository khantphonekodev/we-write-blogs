import { styled } from "styled-components";
import { StyledHeading } from "./Heading";
import { Link } from "react-router-dom";
import { StyledButton } from "./Button";
import { useLogout } from "../features/auth/useLogout";
import { useGetUser } from "../features/auth/useGetUser";

const StyledHeader = styled.header`
  grid-column: 1/3;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  const { mutateLogout, isLoggingOut } = useLogout();
  const { isAuthenticated } = useGetUser();
  return (
    <StyledHeader>
      <Link to="/blogs">
        <StyledHeading as="h3">WeWriteBlogs</StyledHeading>
      </Link>

      {isAuthenticated && (
        <StyledButton
          variation="danger"
          disabled={isLoggingOut}
          onClick={mutateLogout}
        >
          Logout
        </StyledButton>
      )}
      {!isAuthenticated && (
        <Link to="/login">
          <StyledButton variation="primary">Login as Admin</StyledButton>
        </Link>
      )}
    </StyledHeader>
  );
}

export default Header;
