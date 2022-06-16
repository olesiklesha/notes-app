import React, { useContext, useState } from 'react';
import { INote } from '../../models';
import './style.scss';
import { Modal, NoteViewer } from '../index';
import { GloabalActionsKind, GlobalContext } from '../../store';

function Note({ text, id, tags }: INote) {
  const [isViewerOpened, setViewerOpened] = useState(false);
  const [isConfirmOpened, setConfirmOpened] = useState(false);
  const [, dispatch] = useContext(GlobalContext);

  const toggleViewerOpened = () => {
    setViewerOpened((prev) => !prev);
  };

  const handleBtnsClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (e.currentTarget.id === 'delete') {
      toggleConfrimOpened();
    } else {
    }
  };

  const toggleConfrimOpened = () => {
    setConfirmOpened((prev) => !prev);
  };

  const deleteNote = () => {
    console.log('_');
    console.log(id);
    dispatch({
      type: GloabalActionsKind.DELETE_NOTE,
      payload: id,
    });
  };
  return (
    <>
      <div className="card-wrapper" onClick={toggleViewerOpened}>
        <div className="btns-container">
          <button className="actions-btn actions-btn--edit" />
          <button
            className="actions-btn actions-btn--delete"
            id="delete"
            onClick={handleBtnsClick}
          />
        </div>
        <p className="note-text">{text}</p>
      </div>
      <Modal isOpened={isViewerOpened} onCancel={toggleViewerOpened}>
        <NoteViewer text={text} id={id} tags={tags} onCancel={toggleViewerOpened} />
      </Modal>
      <Modal isOpened={isConfirmOpened} onCancel={toggleConfrimOpened} onConfirm={deleteNote} />
    </>
  );
}

export default Note;
