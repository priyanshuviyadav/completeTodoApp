export default function TodoItem({
  taskValue,
  taskId,
  handleMarkComplete,
  isCompleted,
  handleDeleteItem,
}) {
  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    color: isCompleted === true ? "black" : "white",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <>
      <div className="todoItem">
        <div style={taskStyle}>{taskValue}</div>
        <div className="button12">
          <input
            type="checkbox"
            id="select"
            value={taskId}
            checked={isCompleted}
            onChange={() => handleMarkComplete(taskId)}
          />

          <button type="submit" onClick={() => handleDeleteItem(taskId)}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
