const root = document.querySelector('#root');

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState([true]);

  React.useEffect(function () {
    async function getData() {
      const request = await fetch(
        'https://api.spaceflightnewsapi.net/v3/blogs'
      );
      // console.log(request);
      const response = await request.json();

      // console.log(response);
      setNews(response);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <b>Lagi loading..</b>
      ) : (
        <ul>
          {news.map((item) => {
            console.log(item);
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
