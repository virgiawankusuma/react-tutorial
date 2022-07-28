const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);
  React.useEffect(function () {
    const judul = document.getElementById('judul');
    setTimeout(() => {
      judul.textContent = 'Ubah Judul';
    }, 1000);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);