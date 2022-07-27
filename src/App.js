const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Application</h1>
      <p>{login === true && <b>Kamu udah login</b>}</p>
      <button onClick={setLogin.bind(this, true)}>Login</button>
    </>
  );
}

ReactDOM.render(<App />, root);
