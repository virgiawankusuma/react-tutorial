import { useReducer } from 'react';

function reducer(state, action) {
  switch (action) {
    case 'increment' :
      return state + 1;
    case 'decrement' :
      return state - 1;
    default:
      throw new Error(
        `Action type ${action} not supported.`
      );
  }
}

export default function Reducer() {
  const [count, setCount ] = useReducer(reducer, 0);

  return(
    <>
      <button onClick={() => setCount('decrement')}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount('increment')}>+</button>
    </>
  )
}