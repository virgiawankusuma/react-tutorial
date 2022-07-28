const root = document.querySelector('#root');

function App() {
  const fruits = ['Apple', 'Orange', 'Grape', 'Banana'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map((fruit, index) => {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, fruit);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);