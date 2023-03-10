import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
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

  return render ? (
    <div
      style={{
        animation: `${show ? "fadeIn" : "fadeOut"} 0.5s ease-out`,
        overflow: "hidden",
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
};

export default Fade;
