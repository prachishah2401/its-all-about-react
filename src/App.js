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
    otherState: 'some other value',
    showPersons: false
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

  togglePeronsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  }

  render(){
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons =(
        <div >
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
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working now!</p>
        <button 
          style={style}
          onClick={this.togglePeronsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
