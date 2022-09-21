import React, { useState } from "react";

function CategoryFilter({ categories }) {

  console.log(categories)
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleClick(e){
    console.log(e.target)
    e.target.className = 'selected'
  }

  const categoryCollection = categories.map(category => {
    // console.log(category)
    return <button key={category} className="" onClick={handleClick}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryCollection}
    </div>
  );
}

export default CategoryFilter;
