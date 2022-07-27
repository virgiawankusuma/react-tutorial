/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector("#root");

console.log('automatically compile')

function tick() {
  const element = (
    <div>
      <h1>Jam Sekarang</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, root);
}

setInterval(function () {
  tick();
}, 1000);
