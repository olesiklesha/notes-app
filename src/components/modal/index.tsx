import React from 'react';
import Portal from '../portal';

interface ModalProps {
  isOpened: boolean;
  onCansel: () => void;
}

function Modal({ isOpened }: ModalProps) {
  return (
    isOpened && (
      <Portal>
        <div className="modal-overlay">
          <div className="modal-container">
            <h3>this is modal</h3>
          </div>
        </div>
      </Portal>
    )
  );
}

export default Modal;
