const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState();
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(e) {
    e.preventDefault(); // console.log(activity);

    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity(''); // console.log(todos);
  }

  function removeTodoHandler(todoId) {
    // console.log(todoId);
    const filteredTodos = todos.filter(todo => {
      console.log(todoId, todo.id);
      return todo.id !== todoId;
    });
    console.log(filteredTodos);
    setTodos(filteredTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple To-Do List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Activity name..",
    value: activity,
    onChange: e => {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, ' ', /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);