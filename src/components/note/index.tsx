import React from 'react';
import { INote } from '../../models';

function Note({ text }: INote) {
  return <div>{text}</div>;
}

export default Note;
