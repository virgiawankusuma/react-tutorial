const root = document.querySelector("#root");

function App() {
  const [diklik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log(document.getElementById("judul"));
  }, [diklik]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Ini adalah judul"), /*#__PURE__*/React.createElement("button", {
    onClick: setDiklik.bind(this, true)
  }, "Klik aku"), /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count + 1)
  }, "Tambah"), /*#__PURE__*/React.createElement("span", null, count));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);