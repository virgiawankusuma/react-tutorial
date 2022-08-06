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
    e.preventDefault(); // console.log(activity);
    // empty field validation 

    if (!activity) return setMessage('The field can\'t be blank');

    if (edit.id) {
      // console.log('edit');
      const updatedTodo = {
        id: edit.id,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo; // console.log(updatedTodo);

      setTodos(updatedTodos);
      return discardEditHandler();
    }

    setTodos([...todos, {
      id: generateId(),
      activity // activity: activity,

    }]);
    setActivity(''); // console.log(todos);
  }

  function removeTodoHandler(todoId) {
    // console.log(todoId);
    const filteredTodos = todos.filter(todo => {
      // console.log(todoId, todo.id);
      return todo.id !== todoId;
    }); // console.log(filteredTodos);

    setTodos(filteredTodos); // discardEditHandler();

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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple To-Do List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, message && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'red',
      display: 'block'
    }
  }, message), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Activity name..",
    value: activity,
    onChange: e => {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Update' : 'Add'), edit.id && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: discardEditHandler
  }, "Discard")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, ' ', /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "Todo's is still empty")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);