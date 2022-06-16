import React, { useState } from 'react';
import { INote } from '../../models';
import './style.scss';
import { Modal, NoteViewer } from '../index';

function Note({ text, id, tags }: INote) {
  const [isViewerOpened, setViewerOpened] = useState(false);
  const toggleViewerOpened = () => {
    setViewerOpened((prev) => !prev);
  };
  return (
    <>
      <div className="card-wrapper" onClick={toggleViewerOpened}>
        <div className="btns-container">
          <button className="actions-btn actions-btn--edit" />
          <button className="actions-btn actions-btn--delete" />
        </div>
        <p className="note-text">{text}</p>
      </div>
      <Modal isOpened={isViewerOpened} onCancel={toggleViewerOpened}>
        <NoteViewer text={text} id={id} tags={tags} onCancel={toggleViewerOpened} />
      </Modal>
    </>
  );
}

export default Note;
