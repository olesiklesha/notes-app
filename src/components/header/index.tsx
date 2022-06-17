import React, { useState } from 'react';
import { Modal, NoteCreator } from '..';
import './style.scss';

function Header() {
  const [isModalOpened, setModalOpened] = useState(false);
  const toggleModalOpened = () => {
    setModalOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <a href="/" className="logo">
          <span className="logo-img" />
          My notes
        </a>
        <button className="create-btn" onClick={toggleModalOpened}>
          <span className="add-icon" />
          create note
        </button>
      </div>
      <Modal isOpened={isModalOpened} onCancel={toggleModalOpened}>
        <NoteCreator onCancel={toggleModalOpened} />
      </Modal>
    </header>
  );
}

export default Header;
