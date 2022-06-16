import React from 'react';
import './style.scss';

interface ViewerProps {
  text: string;
  tags: string[];
  id: string;
  onCancel: () => void;
}

function NoteViewer({ text, onCancel }: ViewerProps) {
  return (
    <div className="viewer-container">
      <p className="text">{text}</p>
      <button className="actions-btn actions-btn--close" onClick={onCancel} />
    </div>
  );
}

export default NoteViewer;
