import React from "react";
import Task from "./Task"

function TaskList({ tasks, deleteTask }) {

  const taskCollection = tasks.map(task => <Task category={task.category} text={task.text} task={task} key={task.text} deleteTask={deleteTask} />)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskCollection}
    </div>
  );
}

export default TaskList;
