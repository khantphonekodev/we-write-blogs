import { styled } from "styled-components";

const variations = {
  primary: "background-color :var(--green);color : var(--white);",
  danger: "background-color : var(--red) ; color :var(--white);",
  secondary: "background-color: var(--gray)",
};

export const StyledButton = styled.button`
  padding: 12px 22px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 16px;
  ${(props) => variations[props.variation]};
  transition: 0.6s;

  &:hover {
    transform: scale(1.01);
  }
`;
