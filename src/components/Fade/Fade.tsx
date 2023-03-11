import { ReactNode, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./Fade.css";

interface Props {
  show: boolean;
  children: ReactNode;
}

const Fade = ({ show, children }: Props) => {
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
      style={{
        animation: `${show ? "fadeIn" : "fadeOut"} 0.5s ease-out`,
        overflow: "hidden",
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export default Fade;
