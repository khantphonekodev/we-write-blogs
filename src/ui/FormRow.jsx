/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Error } from "./Error";
import { StyledHeading } from "./Heading";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

function FormRow({ children, label, error }) {
  return (
    <StyledFormRow>
      <StyledHeading size={12}>{label} : </StyledHeading>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
