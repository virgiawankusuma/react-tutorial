const root = document.querySelector('#root');

function App() {
  const [count, setCount] = React.useState(0);
  const [diklik, setDiklik] = React.useState(false);
  React.useEffect(function () {
    console.log(document.getElementById('judul'));
  }, [diklik]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, " Set True "), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, " - "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, " + "));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);