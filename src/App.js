const root = document.querySelector('#root');

function App() {
  const [nama, setName] = React.useState('virgiawan');

  function ketikAkuDisubmit(event) {
    event.preventDefault();

    console.log('Nama: ', nama);
  }

  return (
    <form onSubmit={ketikAkuDisubmit}>
      <div>
        <label>Nama: </label>
        <input
          type='text'
          name='nama'
          value={nama}
          onChange={function (e) {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        ></input>
      </div>
      <button type='submit'>Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
