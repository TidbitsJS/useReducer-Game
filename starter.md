A javascript library for building user interfaces

React apps run in browser not in server

React DOM is about rendering these components to real DOM

Reason - UI state becomes difficult to handle with Vanilla javascript in bigger applications

Two kinds of Applications -
1) Single Page
2) Multi Page

## Single Page
only one Html page, Content is rendered on client
Typically only ONE ReactDOM.render() call

## Multiple Page
Multiple Html pages, Content is rendered on Server
One ReactDOM.render() call per "widget"

> ES6 brought keywords let and const

`let` for `variable values`
 & `const` for `constant values`  

## Modular Code of ES6

> Exports & Imports (Modules)

 imports deafult syntax and only export

```javascript
file person.js

const person = {
   name:'Panda'
}

export default person
```

```javascript
file app.js

import person from './person.js'
import prs from './person.js'
```

import syntax for named exports

```javascript
file utility.js

 export const clean = () => {...}
 export const baseData = 10
```

```javascript
file app.js

import { baseData } from './utility.js'
import { clean } from './utility.js'

Renaming convention
import { baseData as myData } from './utility.js'
import * as bundled from './utility.js'

bundled = {
  baseData: {...},
  clean: {...}
}
```

## Classes

```javascript
class Person {
  name = 'Max'  property
  call = () => {...}  method
}
```
Usage or instaniation of classes

```javascript
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

inheritance
class Person extends Master
```

#### Classes Examples

```javascript
class Person {
  constructor() {
    this.name = "Panda"
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName

output : "Panda"
```

> constructor() is default method which executes whenever class is instaniated


```javascript
class Human {
  constructor() {
    this.gender = 'female'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human{
  constructor() {
    super()
    this.name = "Panda"
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

output : "Panda" "female"

```

Inheritance and super constructor

```javascript
class Human {
  constructor() {
    this.gender = 'female'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human{
  constructor() {
    super()
    this.name = "Panda"
    this.gender = 'male'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

output: "Panda" "Male"
```

#### ES6 syntax of initializing properties and methods

Properties are like variables attached to classed & objects, Methods are like functions attached to classes & objects.

> ES6 Syntax

```javascript
constructor() {
  this.myProperty = 'value'
}

myMethod() {...}
```
> ES7 Syntax

```javascript
myProperty = 'value'

myMethod = () => {...}
```

Example of next generation javascript (Don't forget to use ES6/Babel to run the code)

```javascript
class Human {
  gender = 'male'

  printGender = () => {
    console.log(this.gender)
  }
}

class Person extends Human {
  name = 'Panda',
  gender = 'female'

  printMyName = () => {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

output: "Panda" "female"
```

#### Spread & Rest Operators

It's basically a `three dot operator ...`

> Spread Operator - used to split up array elements OR object properties

```javascript
const newArray = [...oldArray,1,2]
const newObject = {...oldObject, newProp:5}
```

> Rest Operator - Used to merge a list of function arguments into an array

```javascript
function sortArgs(...args) {
  return args.sort()
}
```

Examples of Spread & Rest Operators

```javascript
const numbers = [1,2,3]
const newNumbers = [...numbers, 4]

console.log(newNumbers)

output: [1,2,3,4]
```

```javascript
const numbers = [1,2,3]
const newNumbers = [numbers, 4]

console.log(newNumbers)

output: [[1,2,3],4]
```

```javascript
const person = {
  name: "Panda"
}

const newPerson = {
  ...person,
  age: 5
}

console.log(newPerson)

output: [object Object] {
  age: 5,
  name: "Panda"
}
```

```javascript
const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1,2,3))

output: [1]
```

#### Destructuring

Easily extract array elements or object properties and store them in variables

> Array Destructuring

```javascript
[a,b] = ['Hello', 'Panda']
console.log(a)
console.log(b)

output: 'Hello' 'Panda'
```

> Object Destructuring

```javascript
{name} = {name: 'Panda', age:5}
console.log(name)
console.log(age)

output: 'Panda' undefined
```

Examples on Destructuring

```javascript
const numbers  = [1,2,3]
[num1, num2] = numbers

console.log(num1, num2)

output: 1 2

[num1, ,num2] = numbers

console.log(num1, num3)

output: 1 3
```
> Objects and Arrays are reference type build

```javascript

# Reference Type

const person = {
  name: "Panda"
}

const secondPerson = person
console.log(secondPerson)

output: [object Object] {
  name: 'Panda'
}

person.name = 'Samba'
console.log(secondPerson)

output: [object Object] {
  name: 'Samba'
}

# Primitive Type

const number = 10
const newNumber = number

console.log(newNumber)

output: 10
```

```javascript
const person = {
  name: 'Panda'
}

const secondPerson = {
  ...person
}

person.name = 'Samba'
console.log(secondPerson)

output: [object Object] {
  name: 'Panda'
}
```

> map() method of ES6

```javascript
const numbers = [1,2,3]
const doubleNumArray = numbers.map((num) => {
  return num * 2
})

console.log(number)
console.log(doubleNumArray)

output: [1,2,3] [2,4,6]
```
