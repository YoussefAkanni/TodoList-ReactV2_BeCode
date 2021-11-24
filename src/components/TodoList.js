import React, { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  const [textContent, setTextContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorContent, setErrorContent] = useState(false);
  const [createTask, setCreateTask] = useState(false);

  let props = [
    {
      todoValue: todoValue,
      todos: todos,
      textContent: textContent,
      setTextContent: setTextContent,
      setTodos: setTodos,
      setTodoValue: setTodoValue,
    },
  ];

  const toggleCreate = () => {
    setCreateTask(!createTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoValue.length < 5) {
      setErrorTitle(true);
    } else if (textContent.length < 15) {
      setErrorContent(true);
      setErrorTitle(false);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        name: todoValue,
        text: textContent,
        completed: false,
      };
      setTodos([...todos].concat(newTodo));

      setTodoValue("");
      setTextContent("");
      setErrorContent(false);
      setErrorTitle(false);
    }
  };

  return (
    <div className="todolist">
      <header>
        <h1>TodoList</h1>
        <button onClick={toggleCreate}>Create</button>
      </header>
      {createTask && (
        <div className="focus">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text">
              <button onClick={toggleCreate}>X</button>
              <input
                style={{
                  border: errorTitle ? "1px solid red" : "1px solid #8884ff",
                }}
                onChange={(e) => {
                  setTodoValue(e.target.value);
                }}
                type="text"
                value={todoValue}
                placeholder="Title"
                className="title"
              />
              {errorTitle && <p className="titleContent">Min 5 charachters</p>}
              <textarea
                style={{
                  border: errorContent ? "1px solid red" : "1px solid #8884ff",
                }}
                onChange={(e) => {
                  setTextContent(e.target.value);
                }}
                type="text"
                value={textContent}
                placeholder="Description"
              ></textarea>

              {errorContent && <p className="content">Min 15 charachters</p>}
            </div>
            <input type="submit" value="" />
          </form>
        </div>
      )}

      <ul>
        <List props={props} />
      </ul>
    </div>
  );
};

export default TodoList;
