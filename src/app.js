/**
const root = document.querySelector('#root');

const element = document.createElement('h1');
element.textContent = 'Hello World with JS';
element.className = 'heading-1';

root.appendChild(element);
**/
const root = document.querySelector('#root');

const className = "box";

const element = (
    <div className={className}></div>
)

ReactDOM.render(element, root);