const root = document.querySelector('#root');

function App() {
  const fruits = ['Apple', 'Orange', 'Grape', 'Banana'];

  return (
    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}

ReactDOM.render(<App />, root);
