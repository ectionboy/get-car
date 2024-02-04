import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/sprite.svg';
import {
  ModalOverlay,
  ModalWindow,
  CloseIconWrapper,
  CloseIcon,
} from './Modal.styled';

const modalRoot = document.getElementById('modal');
function Modal({ children, onClick }) {
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <CloseIconWrapper onClick={() => onClick()}>
          <CloseIcon>
            <use href={`${sprite}#icon-close`} />
          </CloseIcon>
        </CloseIconWrapper>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot,
  );
}

export default Modal;