import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";
import { useState } from "react";
import { useSignup } from "../features/auth/useSignup";

const StyledDiv = styled.form`
  padding: 40px;
  background-color: var(--gray);
  min-width: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: center;
`;

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateSignup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutateSignup(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <StyledDiv onSubmit={handleSubmit}>
      <StyledHeading as="h2">Sign Up</StyledHeading>
      <StyledInput
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StyledButton variation="primary">
        {isLoading ? "Creating...." : "Create"}
      </StyledButton>
    </StyledDiv>
  );
}

export default SignupForm;
