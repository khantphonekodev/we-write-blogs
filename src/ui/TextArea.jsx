import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: ${(props) => props.size || "8rem"};
  transition: 0.6s;

  &:focus {
    outline: none;
    transform: scale(1.01);
  }
`;

export default Textarea;
