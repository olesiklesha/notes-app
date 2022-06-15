import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <a href="/" className="logo">
          <span className="logo-img" />
          My notes
        </a>
        <button className="create-btn">create note</button>
      </div>
    </header>
  );
}

export default Header;
