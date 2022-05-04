const root = document.querySelector('#root');

const element = (
    // button onclick
    <button onClick={function () {
        alert('I was clicked');
    }}>Click me</button>
)

ReactDOM.render(element, root);