import { ReactElement, useEffect, useState } from "react";
import AnimatedListItem from "./AnimatedListItem";

interface Props {
  items: ReactElement[];
  mountAnimation: string;
  unmountAnimation: string;
}

const toAnimatedItems = (items: ReactElement[]) => {
  return items.map((node) => ({ node, unmounted: false }));
};

const AnimatedList = ({ items, mountAnimation, unmountAnimation }: Props) => {
  const [animatedItems, setAnimatedItems] = useState(toAnimatedItems(items));

  useEffect(() => {
    setAnimatedItems((animatedItems) => {
      const addedKeys = items
        .map((node) => node.key)
        .filter((key) => !animatedItems.find((item) => item.node.key === key));

      const removedKeys = animatedItems
        .map(({ node }) => node.key)
        .filter((key) => !items.find((node) => node.key === key));

      const unmountedKeys = animatedItems
        .filter((item) => item.unmounted)
        .map(({ node }) => node.key);

      const newAnimatedItems = addedKeys.length
        ? toAnimatedItems(items)
        : animatedItems;

      return newAnimatedItems.map((item) => ({
        ...item,
        unmounted: [...removedKeys, ...unmountedKeys].includes(item.node.key),
      }));
    });
  }, [items]);

  return (
    <div className="animatedList">
      {animatedItems.map(({ node, unmounted }) => (
        <AnimatedListItem
          show={!unmounted}
          mountAnimation={mountAnimation}
          unmountAnimation={unmountAnimation}
          key={node.key}
        >
          {node}
        </AnimatedListItem>
      ))}
    </div>
  );
};

export default AnimatedList;
