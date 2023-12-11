import React from "react";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: auto;

  @media (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 15px;
  z-index: 1001;
  width: 100%;
  max-width: 1100px;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 0px;
    border-radius: 0px;
    border: none;
  }
`;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null; // Show if isOpen is true, otherwise return null

  return (
    <ModalOverlay onClick={onClose}>
      {/* Prevents modal from closing when clicking inside the modal container */}
      <ModalContainer onClick={(e) => e.stopPropagation()}>{children}</ModalContainer>
    </ModalOverlay>
  );
};
