import { styled } from "styled-components";

export const PillButton = styled.button`
  padding: 12px 24px;

  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  font-style: italic;
  border-radius: 25px;
  border: none;

  ${(props) =>
    props.$active
      ? "background-color : var(--green);color :var(--white)"
      : "background-color : var(--secondary)"}
`;
