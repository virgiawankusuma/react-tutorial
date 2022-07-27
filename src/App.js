/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector("#root");

const element = (
  <div 
    style={{
      width: 200,
      height: 200,
      backgroundColor: 'blue'
    }}
  ></div>
);

ReactDOM.render(element, root);