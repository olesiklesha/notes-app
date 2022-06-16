import React from 'react';
import { INote } from '../../models';
import './style.scss';

function Note({ text }: INote) {
  return (
    <div className="card-wrapper">
      <div className="btns-container">
        <button className="actions-btn actions-btn--edit" />
        <button className="actions-btn actions-btn--delete" />
      </div>
      <p className="note-text">{text}</p>
    </div>
  );
}

export default Note;
