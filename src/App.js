const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);

  React.useEffect(function () {
    console.log(judulRef);

    setTimeout(() => {
      judulRef.current.textContent = 'Ubah Judul';
    }, 1000);
  });

  return (
    <>
      <h1 ref={judulRef}>Application</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
