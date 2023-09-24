import React from 'react';
import './App.css';
import ShortenerForm from './ShortenerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
      </header>
      <main>
        <ShortenerForm />
      </main>
    </div>
  );
}

export default App;
