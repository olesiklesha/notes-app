import React, { useContext, useState } from 'react';
import { GloabalActionsKind, GlobalContext } from '../../store';

interface UpdaterProps {
  text: string;
  tags: string[];
  id: string;
  onCancel: () => void;
}

function NoteEditor({ text, id, tags, onCancel }: UpdaterProps) {
  const [value, setValue] = useState(text);
  const [, dispatch] = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.length) {
      dispatch({
        type: GloabalActionsKind.UPDATE_NOTE,
        payload: {
          id,
          text: value,
          tags,
        },
      });
    }

    onCancel();
  };
  return (
    <form onSubmit={handleSubmit} className="creator-form">
      <h2 className="modal-title">Edit note</h2>
      <textarea
        cols={30}
        rows={10}
        value={value}
        onChange={handleChange}
        className="textarea"
      ></textarea>
      <button className="create-btn create-btn--modal" type="submit">
        Edit note
      </button>
    </form>
  );
}

export default NoteEditor;
