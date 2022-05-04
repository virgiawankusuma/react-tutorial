const root = document.querySelector('#root');

function clicked() {
    alert('I was clicked!');
}

const element = (
    <button onClick={clicked} > Click me</button>
)

ReactDOM.render(element, root);