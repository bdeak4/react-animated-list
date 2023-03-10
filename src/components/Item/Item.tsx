import { ListItem } from "../../types/item";
import classes from "./Item.module.css";

interface Props {
  item: ListItem;
  handleRemove: (id: number) => void;
}

const Item = ({ item, handleRemove }: Props) => {
  return (
    <div className={classes.item}>
      {item.text}
      <button onClick={() => handleRemove(item.id)}>Remove</button>
    </div>
  );
};

export default Item;
