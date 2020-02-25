import React, { useRef } from "react";
import Portal from "./Portal";
import { useTransition } from "react-spring";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";

function BaseModal({ isOpen, onRequestClose, onKeyDown, children }) {
  const modalRef = useRef(null);

  const backdropTransition = useTransition(isOpen, null, {
    "--opacity": 0,
    from: { "--opacity": 0 },
    enter: { "--opacity": 0.4 },
    leave: { "--opacity": 0 }
  });

  return (
    <Portal>
      {backdropTransition.map(
        backdrop =>
          backdrop.item && (
            <ModalBackdrop
              role="dialog"
              ref={modalRef}
              aria-modal="true"
              key={backdrop.key}
              onKeyDown={onKeyDown}
              style={backdrop.props}
              onClick={onRequestClose}
            >
              {children}
            </ModalBackdrop>
          )
      )}
    </Portal>
  );
}

export default BaseModal;
