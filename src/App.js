import React from 'react';
import './App.css';
import { WebScraper } from './features/webScraper/webScraper.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter an item from Walmart Below:</h1>
        <WebScraper />
      </header>
    </div>
  );
}

export default App;
