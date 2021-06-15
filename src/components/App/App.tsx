import React from 'react';
import './App.css';
import TestComponent from '../TestComponent';
import ClassComponent from '../ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent name ="Tiago"/>
        <ClassComponent/>
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
