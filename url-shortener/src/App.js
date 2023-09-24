import React from 'react';
import './App.css';
import ShortenerForm from './components/ShortenerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">URL Shortener</h1>
      </header>
      <main className="App-main">
        <ShortenerForm />
      </main>
    </div>
  );
}

export default App;
