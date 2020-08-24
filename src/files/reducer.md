Reducers specify how the application's state changes in response to `actions` sent to the store

Actions only describe what happened, but don't describe how the application's state changes

`Reducers` - How application's state changes

`Actions` - Describe what happened to state

In `Redux`, all the application state is stored as a single obejct

The reducer is a pure function that takes the `previous state` and an `action`, and returns the `next state`

```javascript
(previousState, action) => nextState
```

It's called a reducer beacause it's the type of function you would pass to `Array.prototype.reduce(reducer, initialValue)`

> reducer stays pure

#### Things you should never do inside a reducer :

* Mutate its arguments
* Perform side effects like API calls and routing transitions
* Call non-pure functions, e.g. `Date.now()` or `Math.random()`

# 

## Understanding Javascript Mutation and Pure Functions

In JS, there are primitive data types and reference data types.

`primitive data` types are referenced by value

`non-primitive data` types point to memory addresses

#### primitive data types :

 * Boolean
 * Number
 * String
 * Null
 * Undefined
 * Symbol

#### reference data types :

 * Objects
 * Arrays


#### Mutation 

The reference data types (Arrays, Objects) are data structures. These data structures hold the information to manipulate our application 

```javascript
let state = {
    wardens: 900,
    animals: 800
}
```

If we change the number of animals in the state object as `state.animals = 90`

Our state object will hold a new information

```javascript
state = {
    wardens: 900,
    animals: 90
}
```

This is called `mutation` (State change)

#### Immutation

Immutability comes when we want to preserve our state. To keep our state from changing we have to create a new instance of our state objects

```javascript

const bad = (state) => {
    state.prp = 'yes'
    return state
}

const good = (state) => {
    let newState = { ...state }
    newState.prp = 'yes'
    return newState
}

```

> Immutability makes our app state predictable, ups the performance rate of our apps and to easily track changes in state


#### Pure Functions 

Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects)

Its output or return value must depend on input/arguments 

> Pure functions must return a value and depend on the input

```javascript

function impure(arg) {
    finalR.s = 90
    return arg * finalR.s
}

```

Above function is not a pure function because it modified a state finalR.s outside its scope


```javascript

function impure(arg) {
    let f = finalR.s * arg
}

```

Above function also isn't a pure function beacause it didn't return a value thought it didn't modify any external state


```javascript

function impure(arg) {
    return finalR.s * 3
}

```

Above function is impure, though it didn't affect any external state, its output `return finalR.s * 3` isn't dependent on the input `arg`

> Not only must pure function return a value but it must depend on the input

```javascript

function pure(arg) {
    return arg * 4
}

```

Here is a pure function. It didn't `side effect` any external state and it returns an output based on the input


> `Mutation Tracking`, to know when the state is mutated or changed so as to re-render the changed state

`Reducer` - Given the same arguments, it should calculate the next state and return it. No side effects. No API calls. No mutations

> Note - `Object.assign()` is a part of ES6, and is not supported by old browsers. To support them, you will need to either use a polyfill, a `Babel plugin`, or a helper from another library like `_.assign()`

# 

## useReducer Hook

An alternative to `useState`

Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a dispatch method.

`useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one

`useReducer` also lets you optimize performance for components that trigger deep updates because `you can pass dispatch down instead of callbacks`

#### Specifying the initial state

There are two different ways to initialize `useReducer` state.

The simplest way is to pass the initial state as a second argument

```javascript

const [state, dispatch] = useReducer(
    reducer,
    {count: 0}
)

```

#### Lazy Initialization

You can also create the initial state lazily. To do this, you can pass an `init` function as the third argumnet.

```javascript

function init(initialCount) {
    return {count: initialCount}
}

const [state, dispatch] = userReducer(reducer, initialCount, init)

```

#

#### useRef() Hook

The `useRef()` hook allows you to create a persistent ref to DOM node, or really to any value.

Calling `useRef` creates an empty ref object by default, or you can initialize it to some other value by passing an argument

The object it returns will always have a `current` property, and we access the value inside the ref with `inputRef.current` 

Similar to `React.createRef()`, by passing a ref object in as the `ref` prop on a DOM element, React will automatically set that ref object's `current` to refer to the DOM element after it is rendered.

`useRef` can be used to create generic instance variables, just like you can do with a React class component with `this.whatever = value`. The only thing is, writing to it counts as a "side effect" so you can't change it during a render - you should only change a ref inside the body of a `useEffect` hook

> Note - Redux provides a global store where you can keep app data centralized. useReducer is localized to a specific component