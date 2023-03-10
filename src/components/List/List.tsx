import { useState } from "react";
import Item from "../Item";

const initialItemsState = [
  {
    id: 1,
    text: "Item 1",
  },
  {
    id: 2,
    text: "Item 2",
  },
  {
    id: 3,
    text: "Item 3",
  },
];

const List = () => {
  const [items, setItems] = useState(initialItemsState);

  return (
    <div>
      <button
        onClick={() =>
          setItems((prev) => [
            {
              id: Math.min(...prev.map((i) => i.id)) - 1,
              text: "Prepended item",
            },
            ...prev,
          ])
        }
      >
        Prepend
      </button>
      <button
        onClick={() =>
          setItems((prev) => [
            ...prev,
            {
              id: Math.max(...prev.map((i) => i.id)) + 1,
              text: "Appended item",
            },
          ])
        }
      >
        Append
      </button>

      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          handleRemove={(id) =>
            setItems((prev) => prev.filter((item) => item.id !== id))
          }
        />
      ))}
    </div>
  );
};

export default List;
