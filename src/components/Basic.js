import React from 'react'

class Basic extends React.Component {
  render() {
    return (
      React.createElement('div',null,'h1','Hi, I\'m a React App' ),
      React.createElement('div',null, React.createElement(
        'h1',null,'Hi, I\'m a React App'
      )),
      React.createElement('div',{className:'jsx'}, React.createElement(
        'h2',null,'Diving deeper into JSX'
      ))
    )
  }
}

export default Basic
