import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [tasks, setTasks] = useState(TASKS)

  //filter through tasks, check category of each task, if === selectedCategory => task
  const filterTasks = tasks.filter(task => {
    if (selectedCategory === 'All') return tasks
    return task.category === selectedCategory
  })

  function onTaskFormSubmit(newTask) {
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToRemove) {
    const newTaskCollection = tasks.filter(task => {
      if(task.text !== taskToRemove.text) return task
    })
    console.log(taskToRemove)
    setTasks(newTaskCollection)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filterTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
