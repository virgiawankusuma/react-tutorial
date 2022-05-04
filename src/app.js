const root = document.querySelector('#root');

function clicked(msg) {
    alert(msg);
}

const element = (
    <button onClick={clicked.bind(this, 'I was clicked')} > Click me</button>
)

ReactDOM.render(element, root);