With `useEffect`, you can handle lifecycle events directly inside function components. Namely, three of them 
* `componentDidMount`
* `componentDidUpdate`
* `componenetWillUnmount`

The cleanup function you can(optionally) run from `useEffect` isn't only called when the component is unmounted. It's called every time before that effect runs - to clean up from the last run. This is actually more powerful than the `componentWillUnmount` lifecycle because it lets you run a side effect before and after every render, if you need to.

`useEffect` runs after every render(by default), and can optionally clean up for itself before it runs again.

#### Prevent useEffect from Running every Render

If you want your effects to run less often, you can provide a second argument - an array of values. `dependencies` for the effect. If one of the dependencies has changed since the last time, the effect will run again.

Some frameworks are `reactive`, meaning they automatically detect changes and update the UI when changes occur. `React does not do this` - it will only re-render in response to state changes