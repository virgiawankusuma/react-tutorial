const root = document.querySelector('#root');

function App() {
  const [count, updateCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      updateCount(count - 1);
    }
  }, " - "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      updateCount(count + 1);
    }
  }, " + "));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);