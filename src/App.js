import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allCategories = [
    "all",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  const [menuItems, setMenuItems] = useState(items);

  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      setMenuItems(
        items.filter((itm) => {
          return itm.category === category;
        })
      );
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          allCategories={allCategories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
