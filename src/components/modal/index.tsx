import React from 'react';
import Portal from '../portal';
import './style.scss';

interface ModalProps {
  isOpened: boolean;
  onCancel: () => void;
}

function Modal({ isOpened, onCancel }: ModalProps) {
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
              <h3>this is modal</h3>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Modal;
