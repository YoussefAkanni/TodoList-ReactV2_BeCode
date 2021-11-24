import React from "react";

const List = ({ props }) => {
  let todos = props[0].todos;
  let setTodos = props[0].setTodos;

  const handleDelete = (id) => {
    const updatedArray = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedArray);
  };

  const toggleComplete = (id) => {
    const updatedArray = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedArray);
  };

  return (
    <div className="list">
      {todos.map((elem) => (
        <div
          className={elem.completed ? "todo completed" : "todo"}
          key={elem.id}
        >
          <div className="text">
            <p className="title">{elem.name}</p>
            <p className="content">{elem.text}</p>
          </div>
          <button onClick={() => handleDelete(elem.id)}></button>
          <input type="checkbox" onChange={() => toggleComplete(elem.id)} />
        </div>
      ))}
    </div>
  );
};

export default List;
