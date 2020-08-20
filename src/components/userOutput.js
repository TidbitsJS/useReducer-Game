import React, {useState} from 'react'
import UserInput from 'components/userInput'

const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid red',
    padding: '8px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginRight: 20
  }
}

const UserOutput = (props) => {
  const [name, setName] = useState('Gandalf')

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  return(
    <div className="person">
      <p>Something Dark {name}</p>
      <button
        onClick={nameChangeHandler} style={styles.buttonStyle}>Next</button>
      <UserInput changed={nameChangeHandler}/>
    </div>
  )
}

export default UserOutput
