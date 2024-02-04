import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1;
  overflow: auto;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 24px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  max-height: 90vh;
`;

export const CloseIconWrapper = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: #121417;
`;