import { useState } from "react";
export default function AddNewTodo({
  handleAddNewTodo,
  handleDeleletAll,
  handleSelectAll,
  select,
}) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewTodo(todo);
    setTodo("");
  };
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <div className="mainapp">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            id="select"
            checked={select}
            onClick={handleSelectAll}
          />
          Mark All
          <input
            type="text"
            placeholder="Enter Todo List"
            value={todo}
            onChange={handleTodo}
          />
          <button id="btn1" type="submit">
            Add Todo
          </button>
          <button id="delete" type="button" onClick={handleDeleletAll}>
            Delelet All
          </button>
        </form>
      </div>
    </>
  );
}
