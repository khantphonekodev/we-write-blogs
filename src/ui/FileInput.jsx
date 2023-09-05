import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 12px;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.4rem 0.6rem;
    margin-right: 1.2rem;
    border-radius: 4px;
    border: none;
    background-color: var(--green);
    color: var(--white);
    cursor: pointer;
  }
`;

export default FileInput;
