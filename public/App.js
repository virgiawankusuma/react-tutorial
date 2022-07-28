const root = document.querySelector('#root');

function App() {
<<<<<<< HEAD
  React.useEffect(function () {
    const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(resp => {
      // console.log(resp);
      // console.log(resp.json());
      return resp.json();
    }).then(resp => {
      console.log(resp);
    });
  }, []);
=======
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
>>>>>>> 9799e7d64967c61449ff8bcbf52c7327854d189b
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);