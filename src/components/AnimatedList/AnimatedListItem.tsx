import { ReactNode, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import classes from "./index.module.css";

interface Props {
  children: ReactNode;
  show: boolean;
}

const AnimatedListItem = ({ children, show }: Props) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      flushSync(() => {
        setRender(false);
      });
    }
  };

  if (!render) {
    return null;
  }

  return (
    <div
      className={`${classes.item} ${!show && classes.unmount}`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export default AnimatedListItem;
