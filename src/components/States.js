import React, { Component } from 'react'
import Person from 'components/Person'

const styles = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: 8,
  cursor: 'pointer'
}

class States extends Component {
    state = {
      persons: [
        {name: 'Panda', age: 21},
        {name: 'Samba', age: 20},
        {name: 'Candy', age: 22}
      ]
    }

    switchNameHandler = (newName) => {
      this.setState({
        persons: [
          {name: newName, age: 21},
          {name: 'Sandy', age: 20},
          {name: 'Candy', age: 15}
        ]
      })
    }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: 'Panda', age: 21},
          {name: event.target.value, age: 20},
          {name: 'Candy', age: 15}
        ]
      })
    }

    render() {
     return(
      <div>
        <button
           onClick={this.switchNameHandler.bind(this, 'Pandu')}
           style={styles}>Switch Name</button>
        <Person
           name={this.state.persons[0].name}
           age={this.state.persons[0].age} />
        <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'Pandya')}
           changed={this.nameChangedHandler}>My Hobbies: Eating Chocolates</Person>
        <Person
           name={this.state.persons[2].name}
           age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default States
