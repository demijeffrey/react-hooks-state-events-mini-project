import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {

  const categoryCollection = categories.map(category => {
    let a = selectedCategory === category ? 'selected' : ''
    return <button key={category} className={a} value={selectedCategory} onClick={() => setSelectedCategory(category)}>{category}</button>
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
