import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'qwe1', name: 'Prachi', age: 28},
      {id: 'rty1', name: 'Tej', age: 27},
      {id: 'uio1', name: 'Niket', age: 24}
    ],
    otherState: 'some other value',
    showPersons: false
  } 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personindex])
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
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

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );
      
      btnClass = classes.Red;
    } 

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes =['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes =['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is working now!</p>
        <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePeronsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
