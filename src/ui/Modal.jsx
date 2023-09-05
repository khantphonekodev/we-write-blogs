/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 8px;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [showModal, setShowModal] = useState("");
  const openModal = setShowModal;
  const closeModal = () => setShowModal("");

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, value }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: (e) => {
      openModal(value);
      e.stopPropagation();
    },
  });
}

function Content({ children, value }) {
  const { showModal, closeModal } = useContext(ModalContext);
  const { ref } = useOutsideClick(closeModal);

  if (value !== showModal) return null;

  return createPortal(
    <StyledOverlay>
      <StyledModal ref={ref}>
        {cloneElement(children, { onCloseModal: () => closeModal() })}
      </StyledModal>
    </StyledOverlay>,
    document.body
  );
}

Modal.OpenButton = OpenButton;
Modal.Content = Content;

export default Modal;
