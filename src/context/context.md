## COntext API

react version 16.3

Not meant as a replacement for `state management` libraries like `Redux` or `MobX`, the context API allows for an easy way to share global data between multiple components without having to pass it as props.

> Context API solves a common problem known as `prop-drilling`

To create a new context, use React's new `createContext` function -

```javascript
export const LocaleContext = React.createContext('default_value')
```

The `createContext`  function returns a `Provider` and a `Consumer` component 

### Provider

The `Provider` component is used to wrap components in the tree that will need to access to the value from the context.

> React uses a `virtual DOM` to update the actual DOM through a process known as `reconciliation`