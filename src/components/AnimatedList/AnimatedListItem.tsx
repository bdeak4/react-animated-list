import { ReactElement, useEffect, useState } from "react";
import { flushSync } from "react-dom";

interface Props {
  children: ReactElement | null;
  show: boolean;
  mountAnimation: string;
  unmountAnimation: string;
}

const AnimatedListItem = ({
  children,
  show,
  mountAnimation,
  unmountAnimation,
}: Props) => {
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
      style={{ animation: show ? mountAnimation : unmountAnimation }}
      onAnimationEnd={onAnimationEnd}
      className="animatedListItem"
    >
      {children}
    </div>
  );
};

export default AnimatedListItem;
