const root = document.querySelector('#root');

function App() {
<<<<<<< HEAD
  React.useEffect(function () {
    const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.json());
        return resp.json();
      })
      .then((resp) => {
        console.log(resp);
      });
  }, []);
=======
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
>>>>>>> 9799e7d64967c61449ff8bcbf52c7327854d189b
}

ReactDOM.render(<App />, root);
