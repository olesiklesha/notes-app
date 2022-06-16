import React from 'react';
import Portal from '../portal';
import './style.scss';

interface ModalProps {
  isOpened: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
}

function Modal({ isOpened, onCancel, children }: ModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <>
      {isOpened && (
        <Portal>
          <div className="modal-overlay" onClick={handleClick}>
            <div className="modal-container">
              {children || <div>Do you really want to delete?</div>}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Modal;
