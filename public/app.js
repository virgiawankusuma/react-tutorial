const root = document.querySelector('#root');

function clicked(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clicked.bind(this, 'I was clicked')
}, " Click me");
ReactDOM.render(element, root);