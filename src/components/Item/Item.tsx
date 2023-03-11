import { ListItem } from "../../types/item";
import "./Item.css";

interface Props {
  item: ListItem;
  handleInsert: (id: string) => void;
  handleRemove: (id: string) => void;
}

const Item = ({ item, handleInsert, handleRemove }: Props) => {
  return (
    <div className="item">
      {item.text}

      <div className="itemButtons">
        <button onClick={() => handleInsert(item.id)}>Insert</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Item;
