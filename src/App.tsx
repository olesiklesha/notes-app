import React from 'react';
import './app.scss';
import { Footer, Header } from './components';

function App() {
  return (
    <main className="main">
      <Header />
      <div className="wrapper notes-list">notes list</div>
      <Footer />
    </main>
  );
}

export default App;
