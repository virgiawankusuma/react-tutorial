const root = document.querySelector('#root');

function App() {
  const [nama, setName] = React.useState('virgiawan');

  function ketikAkuDisubmit(event) {
    event.preventDefault();
    console.log('Nama: ', nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikAkuDisubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (e) {
      console.log(e.target.value);
      setName(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);