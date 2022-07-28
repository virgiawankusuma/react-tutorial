const root = document.querySelector('#root');

function App() {
  const namaRef = React.useRef(null);

  function ketikAkuDisubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;

    console.log('Nama: ', nama);
  }

  return (
    <form onSubmit={ketikAkuDisubmit}>
      <div>
        <label>Nama: </label>
        <input type='text' name='nama' ref={namaRef}></input>
      </div>
      <button type='submit'>Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
