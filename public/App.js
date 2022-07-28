const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState();
  const [todos, setTodos] = React.useState([]);

  function addTodoHandler(e) {
    e.preventDefault(); // console.log(activity);

    setTodos([...todos, activity]);
    setActivity(''); // console.log(todos);
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
  }, "Add")), /*#__PURE__*/React.createElement("ul", null, todos.map((todo, i) => {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, todo);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);