import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Prachi', age: 28},
      {name: 'Tej', age: 27},
      {name: 'Niket', age: 24}
    ],
    otherState: 'some other value'
  }

  switchNameHandler =(newName) => {
    //console.log('Was Clicked');
   this.setState ({
     persons: [
      {name: newName, age: 28},
      {name: 'Tej', age: 27},
      {name: 'Niket', age: 20}
     ]
   })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Prachi', age: 28},
        {name: event.target.value , age: 27},
        {name: 'Niket', age: 24}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working now!</p>
        <button onClick={() => this.switchNameHandler('Prachi Shah')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age ={this.state.persons[2].age}
          click ={this.switchNameHandler.bind(this, 'Prachi!!!')}/>
      </div>
    );
  }
}

export default App;
