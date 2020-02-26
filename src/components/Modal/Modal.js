import React, { useState } from "react";
import BaseModal from "./BaseModal";
import { animated, useTransition } from "react-spring";

export function ModalTrigger(props) {
  const { buttonRef, showModal, triggerText } = props;

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={showModal}
      className="modal-button"
      style={{ display: triggerText ? "" : "none" }}
    >
      {triggerText}
    </button>
  );
}

export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { buttonRef, closeRef, triggerText, content } = props;

  const modalTransition = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "translate3d(0, 20%, 0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0, 20%, 0)"
    }
  });

  const showModal = () => setIsOpen(true);
  const onRequestClose = () => setIsOpen(false);

  const onKeyDown = event => {
    if (event.keyCode === 27) onRequestClose();
  };

  const modalTriggerProps = {
    showModal,
    buttonRef,
    triggerText
  };

  const modalContainerProps = {
    isOpen,
    onKeyDown,
    onRequestClose
  };

  return (
    <>
      <BaseModal {...modalContainerProps}>
        {modalTransition.map(
          ({ item, key, props: style }) =>
            item && (
              <animated.div
                key={key}
                style={style}
                className="modal-content"
                onClick={e => e.stopPropagation()}
              >
                <button
                  type="button"
                  ref={closeRef}
                  className="modal-close"
                  aria-label="Close Modal"
                  onClick={onRequestClose}
                  aria-labelledby="close-modal"
                >
                  X
                </button>
                <div className="modal-body">{content && content()}</div>
              </animated.div>
            )
        )}
      </BaseModal>

      <ModalTrigger {...modalTriggerProps} />
    </>
  );
}
