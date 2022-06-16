import React, { useContext, useState } from 'react';
import { GloabalActionsKind, GlobalContext } from '../../store';

interface CreatorProps {
  onCancel: () => void;
}

function NoteCreator({}: CreatorProps) {
  const [text, setText] = useState('');
  const [, dispatch] = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: GloabalActionsKind.ADD_NOTE,
      payload: {
        id: String(Date.now()),
        text,
        tags: [],
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="" id="" cols={30} rows={10} value={text} onChange={handleChange}></textarea>
      <button type="submit">create</button>
    </form>
  );
}

export default NoteCreator;
