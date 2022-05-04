const root = document.querySelector('#root');

function clicked() {
  alert('I was clicked!');
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: clicked
}, " Click me");
ReactDOM.render(element, root);