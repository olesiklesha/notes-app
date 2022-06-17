import React from 'react';
import './style.scss';
import Highlighter from 'react-highlight-words';

interface ViewerProps {
  text: string;
  tags: string[];
  id: string;
  onCancel: () => void;
}

function NoteViewer({ text, tags, onCancel }: ViewerProps) {
  return (
    <div className="viewer-container">
      <Highlighter searchWords={tags} textToHighlight={text.replace(/#/gi, '')} />
      <button className="actions-btn actions-btn--close" onClick={onCancel} />
    </div>
  );
}

export default NoteViewer;
