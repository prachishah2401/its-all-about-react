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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Prachi', age: 28},
        {name: event.target.value , age: 27},
        {name: 'Niket', age: 24}
      ]
    })
  }

  deletePersonHandler =((personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  })

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
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
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
