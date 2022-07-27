/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector("#root");

function padaSaatAkuDiklik(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: padaSaatAkuDiklik.bind(this, 'coba')
}, "Click Me");
ReactDOM.render(element, root);