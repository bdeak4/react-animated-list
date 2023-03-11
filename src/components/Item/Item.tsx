import { ListItem } from "../../types/item";
import classes from "./Item.module.css";

interface Props {
  item: ListItem;
  handleInsert: (id: string) => void;
  handleRemove: (id: string) => void;
}

const Item = ({ item, handleInsert, handleRemove }: Props) => {
  return (
    <div className={classes.item}>
      {item.text}

      <div className={classes.buttons}>
        <button onClick={() => handleInsert(item.id)}>Insert</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Item;
