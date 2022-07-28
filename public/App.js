const root = document.querySelector('#root');

function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs'); // console.log(request);

      const response = await request.json();
      console.log(response);
    }

    getData();
  }, []);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);