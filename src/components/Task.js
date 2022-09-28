import React from "react";

function Task({ task, deleteTask, category, text }) {

  function handleDelete(e) {
    // console.log(task)
    deleteTask(task)
  }
  // console.log(task.category)

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
