import { styled } from "styled-components";

const StyledInput = styled.input`
  padding: 12px 24px;
  border: none;
  color: var(--text);
  border-radius: 4px;
  transition: 0.8s;

  &:focus {
    outline: none;
    transform: scale(1.01);
  }
`;
export { StyledInput };
