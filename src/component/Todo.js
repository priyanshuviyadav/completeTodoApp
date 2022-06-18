import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";
import FilteredData from "./FilteredData";
export default function Todo() {
  const initialTasks = [
    { id: "001a", task: "task1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task3", isCompleted: false, isDeleted: false },
  ];

  const [alltodo, setAllTodo] = useState(initialTasks);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [select, setSelect] = useState(false);

  // const handleSelectAll = () => {
  //   setShowFilteredData(true);
  //   const itemList = alltodo.map((item) => {
  //     const newValue1 = { ...item, isCompleted: true };
  //     return newValue1;
  //   });
  //   setFilteredData(itemList);
  //   // setFilteredData([]);
  // };

  const handleSelectAll = () => {
    const selectItem = alltodo.map((item) => {
      const newItemList1 = { ...item, isCompleted: !select };
      return newItemList1;
    });
    setAllTodo(selectItem);
    setSelect(!select);
  };

  const handleIsCompleted = () => {
    setShowFilteredData(true);
    const data = alltodo.filter((element) => element.isCompleted === true);
    setFilteredData(data);
  };

  const handleViewDeletedTask = () => {
    setShowFilteredData(true);
    const tasks = alltodo.filter((element) => element.isDeleted === true);
    setFilteredData(tasks);
  };

  const handleViewAllTask = () => {
    setShowFilteredData(true);
    setFilteredData(alltodo);
  };

  const handleDeleteItem = (todoId) => {
    const itemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const deleteItemList = { ...element, isDeleted: true };
        return deleteItemList;
      }
      return element;
    });
    setAllTodo(itemList);
  };

  const handleMarkComplete = (todoId) => {
    const newItemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: !element.isCompleted };
        return newValue;
      }
      return element;
    });
    setAllTodo(newItemList);
  };

  const handleNewTodo = (newTodo) => {
    let newTodoObj = {
      id: nanoid(5),
      task: newTodo,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...alltodo, newTodoObj];
    setAllTodo(newTodoList);
  };
  const handleDeleteTodo = () => {
    setAllTodo([]);
  };

  return (
    <>
      <div className="app23">
        <AddNewTodo
          handleAddNewTodo={handleNewTodo}
          handleDeleletAll={handleDeleteTodo}
          select={select}
          handleSelectAll={handleSelectAll}
        />

        {showFilteredData === true ? (
          <FilteredData filteredData={filteredData} />
        ) : (
          <TodoList
            handleMarkComplete={handleMarkComplete}
            handleDeleteItem={handleDeleteItem}
            AllTodo={alltodo}
          />
        )}
        <div className="todo">
          <div className="btn">
            <button onClick={() => setShowFilteredData(false)}>
              Active Todo
            </button>
            <button type="button" onClick={handleIsCompleted}>
              IsCompleted
            </button>
            <button type="button" onClick={handleViewDeletedTask}>
              All Deleted Todo
            </button>
            <button type="button" onClick={handleViewAllTask}>
              All Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
