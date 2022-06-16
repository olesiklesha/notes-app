import React, { useContext } from 'react';
import './app.scss';
import { Footer, Header, Note } from './components';
import { GlobalContext } from './store';

function App() {
  const [state] = useContext(GlobalContext);
  const { notes } = state;
  console.log(state);
  console.log(notes);
  return (
    <main className="main">
      <Header />
      <div className="wrapper notes-list">
        {notes.length > 0 &&
          notes.map((el) => <Note key={el.id} id={el.id} text={el.text} tags={el.tags} />)}
      </div>
      <Footer />
    </main>
  );
}

export default App;
