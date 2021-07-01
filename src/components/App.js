import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSelectedCategory, setCategoryChange] = useState('All')

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleCategoryChange(e) {
    setCategoryChange(e.target.value)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList 
        items={items} 
        // selectedCategory={isSelectedCategory}
        onCategoryChange={handleCategoryChange} 
      />
    </div>
  );
}

export default App;
