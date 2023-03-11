import { ReactElement, useEffect, useState } from "react";
import AnimatedListItem from "./AnimatedListItem";

interface Props {
  items: ReactElement[];
}

const toAnimatedItems = (items: ReactElement[]) => {
  return items.map((node) => ({ node, unmounted: false }));
};

const AnimatedList = ({ items }: Props) => {
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
    <div>
      {animatedItems.map(({ node, unmounted }) => (
        <AnimatedListItem show={!unmounted} key={node.key}>
          {node}
        </AnimatedListItem>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes yellowbg {
            0% {
              background-color: yellow;
            }
            100% {
              background-color: white;
            }
          }
    `,
        }}
      ></style>
      <table>
        <tbody>
          {animatedItems.map(({ node, unmounted }) => (
            <tr
              style={{
                backgroundColor: unmounted ? "#f0f" : "white",
                animation: "yellowbg 3s",
              }}
              key={node.key}
            >
              <td>{node.key}</td>
              <td>{node.props.item.text}</td>
              <td>{unmounted ? "unmounted" : "mounted"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimatedList;
