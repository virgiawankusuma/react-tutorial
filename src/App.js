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

const element = ( 
  <button onClick={padaSaatAkuDiklik.bind(this,'coba')}>
    Click Me
  </button>
);

ReactDOM.render(element, root);