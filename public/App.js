/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector("#root");
console.log('automatically compile');

function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root);
}

setInterval(function () {
  tick();
}, 1000);