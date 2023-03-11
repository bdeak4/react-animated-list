import { ListItem } from "../../types/item";
import classes from "./Item.module.css";

interface Props {
  item: ListItem;
  handleAddBelow: (id: string) => void;
  handleRemove: (id: string) => void;
}

const Item = ({ item, handleAddBelow, handleRemove }: Props) => {
  return (
    <div className={classes.item}>
      {item.text}
      <div className={classes.buttons}>
        <button onClick={() => handleAddBelow(item.id)}>Insert</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Item;
