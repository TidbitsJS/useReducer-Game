import React from 'react'

const styles = {
  fontSize: 17,
  width: 240,
  height: 30,
  padding: '5px 10px',
  marginTop: 20
}


const UserInput = (props) => {
  return(
    <input
      type="text"
      style={styles}
      placeholder='Type here to see magic'
      onChange={props.changed}
      value={props.name}/>
  )
}

export default UserInput
