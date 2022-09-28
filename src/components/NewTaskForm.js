import React, { useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [task, setTask] = useState("")
  const [category, setCategory] = useState("")

  const categoryCollection = categories.map(category => {
    if(category !== "All")
    return <option key={category} value={category}>{category}</option>
  })

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      text: task,
      category: category
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setTask(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryCollection}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
