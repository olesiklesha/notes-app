import React from 'react';
import Portal from '../portal';
import './style.scss';

interface ModalProps {
  isOpened: boolean;
  onCancel: () => void;
  children?: JSX.Element | JSX.Element[];
  onConfirm?: () => void;
}

function Modal({ isOpened, onCancel, children, onConfirm }: ModalProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  const handleDelete = () => {
    if (!onConfirm) return;

    onConfirm();
    onCancel();
  };

  return (
    <>
      {isOpened && (
        <Portal>
          <div className="modal-overlay" onClick={handleClick}>
            <div className="modal-container">
              {children || (
                <div>
                  <h2 className="confirm-title">Do you really want to delete?</h2>
                  <div className="confrim-btns-container">
                    <button onClick={handleClick} className="confirm-btn confirm-btn--cansel">
                      cansel
                    </button>
                    <button onClick={handleDelete} className="confirm-btn confirm-btn--delete">
                      delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Modal;
