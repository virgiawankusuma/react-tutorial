const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Udah login"), /*#__PURE__*/React.createElement("button", {
      onClick: setLogin.bind(this, false)
    }, "Logout"));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login dulu bang"), /*#__PURE__*/React.createElement("button", {
    onClick: setLogin.bind(this, true)
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);