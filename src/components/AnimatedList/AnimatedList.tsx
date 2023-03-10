import { ReactElement, ReactNode, useEffect, useState } from "react";
import Fade from "../Fade/Fade";
import classes from "./AnimatedList.module.css";

interface Props {
  list: ReactElement[];
}

const AnimatedList = ({ list }: Props) => {
  // const [animatedList, setAnimatedList] = useState(
  //   list.map((node) => ({ node, unmounting: false, unmounted: false }))
  // );

  // useEffect(() => {
  //   const removedKeys = animatedList
  //     .map((item) => item.node.key)
  //     .filter((key) => !list.map((item) => item.key).includes(key));
  //   setAnimatedList((prev) =>
  //     prev.map((item) =>
  //       removedKeys.includes(item.node.key)
  //         ? { ...item, unmounting: true }
  //         : item
  //     )
  //   );
  // }, [list]);

  return (
    <div>
      {list.map((item) => (
        <Fade show={!item.props.item.hidden} key={item.key}>
          {item}
        </Fade>
      ))}
    </div>
  );
};

export default AnimatedList;
