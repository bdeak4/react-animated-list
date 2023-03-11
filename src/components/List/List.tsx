import { useState } from "react";
import AnimatedList from "../AnimatedList";
import Item from "../Item";
import classes from "./List.module.css";
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

  return (
    <div>
      <div className={classes.buttons}>
        <button onClick={appendItem}>Prepend</button>
        <button onClick={prependItem}>Append</button>
        <button onClick={reset}>Reset</button>
      </div>

      <AnimatedList
        items={items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleAddBelow={(id) => {
              setItems((prev) => {
                const index = prev.findIndex((item) => item.id === id);
                return [
                  ...prev.slice(0, index + 1),
                  { id: uuid(), text: "Added below" },
                  ...prev.slice(index + 1),
                ];
              });
            }}
            handleRemove={(id) =>
              setItems((prev) => prev.filter((item) => item.id !== id))
            }
          />
        ))}
      />
    </div>
  );
};

export default List;
