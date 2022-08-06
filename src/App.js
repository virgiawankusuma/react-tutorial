const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(e) {
    e.preventDefault();
    // console.log(activity);

    // empty field validation 
    if (!activity) return setMessage('The field can\'t be blank');

    if(edit.id) {
      // console.log('edit');
      const updatedTodo = {
        id: edit.id,
        activity
      }

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      // console.log(updatedTodo);

      setTodos(updatedTodos);

      return discardEditHandler();
    }
    setTodos([
      ...todos,
      {
        id: generateId(),
        activity
        // activity: activity,
      },
    ]);
    setActivity('');
    // console.log(todos);
  }

  function removeTodoHandler(todoId) {
    // console.log(todoId);
    const filteredTodos = todos.filter((todo) => {
      // console.log(todoId, todo.id);
      return todo.id !== todoId;
    });

    // console.log(filteredTodos);
    setTodos(filteredTodos);

    // discardEditHandler();
    edit.id && discardEditHandler();
  }

  function editTodoHandler(todo) {
    // console.log(todo);
    setActivity(todo.activity);
    setEdit(todo);
  }

  function discardEditHandler() {
    // console.log('discard edit');
    setEdit({}); // for clear edit.id
    setActivity('');
  }

  return (
    <>
      <h1>Simple To-Do List</h1>
      <form onSubmit={saveTodoHandler}>
        {
          message &&
          <span style={{
            color: 'red',
            display: 'block'
          }}>{message}</span>
        }
        <input
          type='text'
          placeholder='Activity name..'
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button type='submit'>
          {edit.id ? 'Update' : 'Add'}
        </button>
        {
          edit.id && <button type='button' onClick={discardEditHandler}>Discard</button>
        }
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.activity}{' '}
              <button onClick={editTodoHandler.bind(this, todo)}>
                Edit
              </button>
              <button onClick={removeTodoHandler.bind(this, todo.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
