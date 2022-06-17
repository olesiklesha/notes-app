import React, { useContext, useState } from 'react';
import './style.scss';
import { INote } from '../../models';
import { GlobalContext } from '../../store';

interface SearchBarProps {
  update: (value: INote[]) => void;
}

function SearchBar({ update }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [{ notes }] = useContext(GlobalContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      const data = notes.filter((note) => {
        const { tags } = note;
        const res = tags.filter((el) =>
          el.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        );

        return res.length > 0;
      });

      update(data);
    } else update(notes);
  };

  return (
    <div className="wrapper search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={onChange}
        value={inputValue}
      />
    </div>
  );
}

export default SearchBar;
