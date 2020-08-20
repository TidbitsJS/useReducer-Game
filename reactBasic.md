#### Why?

Optimize code

Use Next-Gen JavaScript Features ES6 ES5

Be More Productive

#### How?

Use Dependency Management Tool npm or yarn

Use Bundler
Recommended: Webpack

Use Compiler (Next-Gen JavaScript)
Babel + Presets

Use a Development Server

#### create react App Tool
npm install create-react-app -g

create-react-app react-complete-guide

npm start

> react-scripts Dependency is package offering all build work flow , Development server, Next-Gen JavaScript feature support and all those things used in project

#### Handling props

```javascript
class Person extends Component {
  render() {
    return(
      <div>
        <p>My name is {this.props.name}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <Person name="Robo" />
    )
  }
}
```

```javascript
const Person = (props) => {
  return (
    <div>
      <p>My name is {props.name}</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <<Person name="Robo"/>
    )
  }
}
```

```javascript
const Person = ({name}) => {
  return (
    <div>
      <p>My name is {name}</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <<Person name="Robo"/>
    )
  }
}
```

```javascript
const Person = (props) => {
  const {name} = props
  return (
    <div>
      <p>My name is {name}</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <<Person name="Robo"/>
    )
  }
}
```
