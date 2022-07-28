const root = document.querySelector('#root');

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState([true]);
  React.useEffect(function () {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs'); // console.log(request);

      const response = await request.json(); // console.log(response);

      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("b", null, "Lagi loading..") : /*#__PURE__*/React.createElement("ul", null, news.map(item => {
    console.log(item);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);