const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);

  React.useEffect(function () {
    const judul = document.getElementById('judul');
    setTimeout(() => {
      judul.textContent = 'Ubah Judul';
    }, 1000);
  });

  return (
    <>
      <h1 id='judul'>Application</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
