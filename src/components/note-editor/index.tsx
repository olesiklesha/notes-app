import React, { useContext, useState } from 'react';
import { GloabalActionsKind, GlobalContext } from '../../store';
import Highlighter from 'react-highlight-words';

interface UpdaterProps {
  text: string;
  tags: string[];
  id: string;
  onCancel: () => void;
}

function NoteEditor({ text, id, tags, onCancel }: UpdaterProps) {
  const [value, setValue] = useState(text);
  const [isEditing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const [, dispatch] = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.length) {
      const tags = text.match(/(#[a-z\d-]+)/gi) as string[];

      dispatch({
        type: GloabalActionsKind.UPDATE_NOTE,
        payload: {
          id,
          text: value,
          tags: tags.map((el) => el.slice(1)),
        },
      });
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="creator-form">
      <h2 className="modal-title">Edit note</h2>
      {isEditing ? (
        <textarea
          cols={30}
          rows={10}
          value={value}
          onChange={handleChange}
          className="textarea"
        ></textarea>
      ) : (
        <Highlighter
          searchWords={tags}
          textToHighlight={text.replace(/#/gi, '')}
          onClick={handleEditing}
        />
      )}
      <button className="create-btn create-btn--modal" type="submit">
        Edit note
      </button>
    </form>
  );
}

export default NoteEditor;
