import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function Portal({ children }) {
  const node = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRoot.appendChild(node);

    return () => {
      modalRoot.removeChild(node);
    };
  }, [node]);

  return createPortal(children, node);
}

export default Portal;
