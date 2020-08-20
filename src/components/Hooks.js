import React, { useState } from 'react'
import Person from 'components/Person'

const styles = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid red',
  padding: 8,
  cursor: 'pointer'
}

const Hooks = props => {
  const [ personState, setPerson ] = useState({
    persons: [
      {name: 'Panda', age: 21},
      {name: 'Samba', age: 20},
      {name: 'Candy', age: 22}
    ],
    otherState: 'Some imp info'
  })

  const [anotherState, setAnother ] = useState('Something dark')

  console.log(personState, anotherState)

  const switchNameHandler = (newName) => {
    setPerson({
      persons: [
        {name: newName, age: 21},
        {name: 'Sandy', age: 20},
        {name: 'Candy', age: 15}
      ],
      otherState: personState.otherState
    })

    setAnother('Something Deep')
  }

  const nameChangedHandler = (event) => {
    setPerson({
      persons: [
        {name: 'Panda', age: 21},
        {name: event.target.value, age: 20},
        {name: 'Candy', age: 15}
      ]
    })
  }

  return (
    <div>
      <button
        onClick={switchNameHandler.bind(this, 'Pandu')}
        style={styles}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Pandya')}
        changed={nameChangedHandler}> My Hobbies: Eating Chocolates
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
    </div>
  )
}

export default Hooks
