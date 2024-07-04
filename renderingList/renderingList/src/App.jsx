import React from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My List</h1>
        <ItemList items={items} />
      </header>
    </div>
  );
}

export default App;
