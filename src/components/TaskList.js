import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {

  const taskCollection = tasks.map(task => <Task task={task} key={task.text} />)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskCollection}
    </div>
  );
}

export default TaskList;
