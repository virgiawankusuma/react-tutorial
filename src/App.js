const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      console.log(document.getElementById("judul"));
    },
    [diklik]
  );

  return (
    <>
      <h1 id="judul">Ini adalah judul</h1>
      <button onClick={setDiklik.bind(this, true)}>Klik aku</button>
      <button onClick={setCount.bind(this, count + 1)}>Tambah</button>
      <span>{count}</span>
    </>
  );
}

ReactDOM.render(<App />, root);
