const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return (
      <>
        <h1>Udah login</h1>
        <button onClick={setLogin.bind(this, false)}>Logout</button>
      </>
    );
  }

  return (
    <>
      <h1>Login dulu bang</h1>
      <button onClick={setLogin.bind(this, true)}>Login</button>
    </>
  );
}

ReactDOM.render(<App />, root);
