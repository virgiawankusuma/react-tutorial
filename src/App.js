const root = document.querySelector('#root');

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  /**
   * useEffect all state
  React.useEffect(
    function () {
      console.log("exec");
    }
  );
   */

  /**
   * useEffect specific state
  React.useEffect(
    function () {
      console.log("exec");
    },
    [diklik]
  );
   */

  /**
   * useEffect initialize 1 time using empty array
  React.useEffect(
    function () {
      console.log("exec");
    },
    [diklik]
  );
   */

  /** destroy when mount new component aka Cleanup */
  React.useEffect(function () {
    console.log('init carousel');

    return function () {
      console.log('destroy');
    };
  });

  return (
    <>
      <h1 id='judul'>Ini adalah judul</h1>
      <button onClick={setDiklik.bind(this, true)}>Klik aku</button>
      <button onClick={setCount.bind(this, count + 1)}>Tambah</button>
      <span>{count}</span>
    </>
  );
}

ReactDOM.render(<App />, root);
