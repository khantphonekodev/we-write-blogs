/* eslint-disable react/prop-types */
import styled from "styled-components";
import { StyledButton } from "./Button";
import { StyledHeading } from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--gray);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  function handleConfirmClick() {
    onConfirm();
  }

  return (
    <StyledConfirmDelete>
      <StyledHeading as="h3">Delete {resource}</StyledHeading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <StyledButton variation="secondary" onClick={onCloseModal}>
          Cancel
        </StyledButton>
        <StyledButton
          variation="danger"
          onClick={handleConfirmClick}
          disabled={disabled}
        >
          Delete
        </StyledButton>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
