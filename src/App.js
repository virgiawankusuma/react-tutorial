const root = document.querySelector("#root");

function App() {
  /*
  const state = React.useState(2);
  const count = state[0];
  const updateCount = state[1];
  */
 
  /**
   * Destructuring
   */
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button
        onClick={setCount.bind(this, count - 1)}  
      >-
      </button>
      <span>{count}</span>
      <button
        onClick={setCount.bind(this, count + 1)}  
      >+
      </button>
    </>
  )
}

ReactDOM.render(<App />, root);