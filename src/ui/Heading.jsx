import { styled } from "styled-components";

export const StyledHeading = styled.h1`
  ${(props) => props.size && `font-size : ${props.size}px`};
  letter-spacing: 0.6px;
  font-weight: 400;
`;
