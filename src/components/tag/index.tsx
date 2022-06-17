import React, { useContext } from 'react';
import { GloabalActionsKind, GlobalContext } from '../../store';
import './style.scss';

interface TagProps {
  text: string;
  id: string;
}

function Tag({ text, id }: TagProps) {
  const [, dispatch] = useContext(GlobalContext);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch({
      type: GloabalActionsKind.DELETE_TAG,
      payload: {
        tag: text,
        id,
      },
    });
  };

  return (
    <span className="tag">
      <span className="tag-btn" onClick={handleDelete} />
      {text}
    </span>
  );
}

export default Tag;
