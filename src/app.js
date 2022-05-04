const root = document.querySelector('#root');


function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button onClick={
                function () {
                    setCount(count - 1);
                }
            }> - </button>
            <span>{count}</span>
            <button onClick={
                function () {
                    setCount(count + 1);
                }
            }> + </button>
        </>
    )
}

ReactDOM.render(<App />, root);