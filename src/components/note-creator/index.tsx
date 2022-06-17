import React, { useContext, useState } from 'react';
import { GloabalActionsKind, GlobalContext } from '../../store';
import './style.scss';

interface CreatorProps {
  onCancel: () => void;
}

function NoteCreator({ onCancel }: CreatorProps) {
  const [text, setText] = useState('');
  const [, dispatch] = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tags = text.match(/(#[a-z\d-]+)/gi) as string[];
    tags.map((el) => el.slice(1));
    // (^|\s)
    dispatch({
      type: GloabalActionsKind.ADD_NOTE,
      payload: {
        id: String(Date.now()),
        text,
        tags: tags.map((el) => el.slice(1)),
      },
    });

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="creator-form">
      <h2 className="modal-title">Create note</h2>
      <textarea
        cols={30}
        rows={10}
        value={text}
        onChange={handleChange}
        className="textarea"
      ></textarea>
      <button className="create-btn create-btn--modal" type="submit">
        create note
      </button>
    </form>
  );
}

export default NoteCreator;
