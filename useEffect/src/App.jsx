import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);
  const [color, setColor] = useState(0);

  // case1: run on every render
  useEffect(() => {
    alert("welcome to my page, I will run on every render");
  });

  // case2: run only on first render
  useEffect(() => {
    alert("this is the first render");
  }, []);

  // case3: run when the color is changed
  useEffect(() => {
    alert("running because color was changed");
  }, [color]);

  // case4: run when count is changed
  useEffect(() => {
    alert("count was changed");
    // Ensure color update doesn't cause infinite loop
    setColor(prevColor => prevColor + 1);
  }, [count]);

  return (
    <>
      <Navbar color={`navyblue${color}`} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
