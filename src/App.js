import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Prachi', age: 28},
      {name: 'Tej', age: 27},
      {name: 'Niket', age: 24}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working now!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
