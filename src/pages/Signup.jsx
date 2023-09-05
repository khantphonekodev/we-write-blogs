import { styled } from "styled-components";
import SignupForm from "../ui/SignupForm";

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Signup() {
  return (
    <StyledDiv>
      <SignupForm />
    </StyledDiv>
  );
}

export default Signup;
