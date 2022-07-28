const root = document.querySelector('#root');

function App() {
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
}

ReactDOM.render(<App />, root);
