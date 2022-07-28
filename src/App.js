const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState();
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(e) {
    e.preventDefault();
    // console.log(activity);

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity('');
    // console.log(todos);
  }

  return (
    <>
      <h1>Simple To-Do List</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type='text'
          placeholder='Activity name..'
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button type='submit'>Add</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.activity}</li>;
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
