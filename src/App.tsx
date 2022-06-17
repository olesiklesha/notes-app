import React, { useContext, useEffect, useState } from 'react';
import './app.scss';
import { Footer, Header, Note, SearchBar } from './components';
import { GlobalContext } from './store';
import { INote } from './models';

function App() {
  const [{ notes }] = useContext(GlobalContext);
  const [data, setData] = useState(notes);

  useEffect(() => {
    setData(notes);
  }, [notes]);

  const updateData = (value: INote[]) => {
    setData(value);
  };

  return (
    <main className="main">
      <Header />
      <SearchBar update={updateData} />
      {!data.length && <h2 className="modal-title">Sorry, nothing found</h2>}
      <div className="wrapper notes-list">
        {data.length > 0 &&
          data.map((el) => <Note key={el.id} id={el.id} text={el.text} tags={el.tags} />)}
      </div>
      <Footer />
    </main>
  );
}

export default App;
