import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={onCategoryChange} />
      </div>
        <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
