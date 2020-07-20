import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if(this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    } 

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePeronsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
