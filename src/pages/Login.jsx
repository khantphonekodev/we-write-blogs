import { styled } from "styled-components";
import LoginForm from "../ui/LoginForm";

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <StyledDiv>
      <LoginForm />
    </StyledDiv>
  );
}

export default Login;
