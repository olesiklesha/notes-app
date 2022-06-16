import React, { useContext, useState } from 'react';
import { INote } from '../../models';
import './style.scss';
import { Modal, NoteEditor, NoteViewer } from '../index';
import { GloabalActionsKind, GlobalContext } from '../../store';

function Note({ text, id, tags }: INote) {
  const [isViewerOpened, setViewerOpened] = useState(false);
  const [isEditOpened, setEditOpened] = useState(false);
  const [isConfirmOpened, setConfirmOpened] = useState(false);
  const [, dispatch] = useContext(GlobalContext);

  const toggleViewerOpened = () => {
    setViewerOpened((prev) => !prev);
  };

  const toggleEditOpened = () => {
    setEditOpened((prev) => !prev);
  };

  const handleBtnsClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (e.currentTarget.id === 'delete') {
      toggleConfrimOpened();
    } else if (e.currentTarget.id === 'edit') {
      toggleEditOpened();
    }
  };

  const toggleConfrimOpened = () => {
    setConfirmOpened((prev) => !prev);
  };

  const deleteNote = () => {
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
          <button className="actions-btn actions-btn--edit" id="edit" onClick={handleBtnsClick} />
          <button
            className="actions-btn actions-btn--delete"
            id="delete"
            onClick={handleBtnsClick}
          />
        </div>
        <p className="note-text">{text}</p>
        <div className="tags-container">
          {tags.length > 0 &&
            tags.map((el) => (
              <span key={el + id} className="tag">
                {el}
              </span>
            ))}
        </div>
      </div>
      <Modal isOpened={isViewerOpened} onCancel={toggleViewerOpened}>
        <NoteViewer text={text} id={id} tags={tags} onCancel={toggleViewerOpened} />
      </Modal>
      <Modal isOpened={isEditOpened} onCancel={toggleEditOpened}>
        <NoteEditor text={text} tags={tags} id={id} onCancel={toggleEditOpened} />
      </Modal>
      <Modal isOpened={isConfirmOpened} onCancel={toggleConfrimOpened} onConfirm={deleteNote} />
    </>
  );
}

export default Note;
