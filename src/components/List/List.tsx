import { useState } from "react";
import AnimatedList from "../AnimatedList";
import Fade from "../Fade/Fade";
import Item from "../Item";

const initialItemsState = [
  {
    id: 1,
    text: "Item 1",
    hidden: false,
  },
  {
    id: 2,
    text: "Item 2",
    hidden: false,
  },
  {
    id: 3,
    text: "Item 3",
    hidden: false,
  },
];

const List = () => {
  const [items, setItems] = useState(initialItemsState);
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        onClick={() =>
          setItems((prev) => [
            {
              id: Math.min(...prev.map((i) => i.id)) - 1,
              text: "Prepended item",
              hidden: false,
            },
            ...prev,
          ])
        }
      >
        Prepend
      </button>

      <AnimatedList
        list={items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleRemove={(id) =>
              // setItems((prev) => prev.filter((item) => item.id !== id))
              setItems((prev) =>
                prev.map((item) =>
                  item.id === id ? { ...item, hidden: true } : item
                )
              )
            }
          />
        ))}
      />

      <button
        onClick={() =>
          setItems((prev) => [
            ...prev,
            {
              id: Math.max(...prev.map((i) => i.id)) + 1,
              text: "Appended item",
              hidden: false,
            },
          ])
        }
      >
        Append
      </button>
    </div>
  );
};

export default List;
