import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";
import { useState } from "react";
import { useLogin } from "../features/auth/useLogin";

const StyledForm = styled.form`
  padding: 40px;
  background-color: var(--gray);
  border-radius: 20px;
  display: flex;

  flex-direction: column;
  gap: 1.6rem;
  text-align: center;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateLogin, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutateLogin(
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading as="h2">Log In</StyledHeading>
      <StyledInput
        type="email"
        value={email}
        placeholder="E-mail"
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
      <StyledButton variation="primary" disabled={isLoading}>
        {isLoading ? "Loading..." : "Enter"}
      </StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
