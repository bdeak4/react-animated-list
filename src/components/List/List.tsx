import { useState } from "react";
import AnimatedList from "../AnimatedList";
import Item from "../Item";
import "./List.css";
import { v4 as uuid } from "uuid";

const initialItemsState = () => [
  { id: uuid(), text: "Item 1" },
  { id: uuid(), text: "Item 2" },
  { id: uuid(), text: "Item 3" },
];

const List = () => {
  const [items, setItems] = useState(initialItemsState());

  const appendItem = () => {
    setItems((prev) => [{ id: uuid(), text: "Prepended item" }, ...prev]);
  };

  const prependItem = () => {
    setItems((prev) => [...prev, { id: uuid(), text: "Appended item" }]);
  };

  const reset = () => {
    setItems(initialItemsState());
  };

  const insertItem = (id: string) => {
    setItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      return [
        ...prev.slice(0, index + 1),
        { id: uuid(), text: "Inserted item" },
        ...prev.slice(index + 1),
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="listButtons">
        <button onClick={appendItem}>Prepend</button>
        <button onClick={prependItem}>Append</button>
        <button onClick={reset}>Reset</button>
      </div>

      <AnimatedList
        items={items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleInsert={insertItem}
            handleRemove={removeItem}
          />
        ))}
        mountAnimation="fadeIn 0.5s ease-out"
        unmountAnimation="fadeOut 0.5s ease-out"
      />
    </div>
  );
};

export default List;
