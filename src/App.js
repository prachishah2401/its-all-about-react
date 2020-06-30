import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is working now!</p>
      <Person name="Prachi" age ="28"/>
      <Person name="Tej" age ="27">My Hobbies: Racing</Person>
      <Person name="Niket" age ="24"/>
    </div>
  );
}

export default App;
