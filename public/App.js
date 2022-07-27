/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector("#root");
const element = /*#__PURE__*/React.createElement("div", {
  className: "box"
});
ReactDOM.render(element, root);