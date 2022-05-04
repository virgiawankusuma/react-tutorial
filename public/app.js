const root = document.querySelector('#root');
const element =
/*#__PURE__*/
// button onclick
React.createElement("button", {
  onClick: function () {
    alert('I was clicked');
  }
}, "Click me");
ReactDOM.render(element, root);