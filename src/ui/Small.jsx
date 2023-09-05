import { styled } from "styled-components";

export const Small = styled.p`
  font-size: ${(props) => (props.size ? props.size : "12px")};
  color: ${(props) => props.color};
  font-weight: 500;
  white-space: normal;
`;
