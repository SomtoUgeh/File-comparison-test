import React, { useCallback, forwardRef } from "react";
import { animated } from "react-spring";
import "./style.css";

function ModalBackdrop({ className, onClick, onKeyDown, ...props }, ref) {
  const handleClick = useCallback(
    event => {
      if (ref.current === event.target) onClick(event);
    },
    [onClick, ref]
  );

  return (
    <animated.div
      ref={ref}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      className="ModalBackdrop"
      {...props}
    />
  );
}

export default forwardRef(ModalBackdrop);
