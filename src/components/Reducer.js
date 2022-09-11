import { useState } from 'react';

export default function Reducer() {
  const [count, setCount ] = useState(0);

  return(
    <>
      <button onClick={() => count > 0 && setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count+1)}>+</button>
    </>
  )
}