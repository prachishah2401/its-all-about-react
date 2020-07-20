import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent { 
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.clicked !== this.props.clicked ||
  //       nextProps.changed !== this.props.changed) 
  //   {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   return true;
  // }

  getSnapshotBeforeUpdate (nextProps, nextState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message : 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Person.js] componentWillUnmount');
  }
  render() {
    console.log('Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;