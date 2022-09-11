import { useReducer } from 'react';

function reducer(state, action) {
  console.log(state, action);
}

export default function Reducer() {
  const [count, setCount ] = useReducer(reducer, 'ini adalah state');

  return(
    <>
      <button onClick={() => setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount('ini adalah action')}>+</button>
    </>
  )
}