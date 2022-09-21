import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  // const [tasks, setTasks] = useState(tasks)
  // function handleClick(e){
  //   console.log(e.target)
  //   e.target.className = 'selected'
  //   setTasks(tasks.filter(task => e.target.value === task.category))
  // }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
