import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";

const ModalTrigger = props => {
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
};

const ModalContainer = props => {
  const { onClose, modalRef, closeRef, children, onKeyDown } = props;

  return createPortal(
    <FocusTrap>
      <div
        role="dialog"
        tabIndex="-1"
        ref={modalRef}
        aria-modal="true"
        onClick={onClose}
        onKeyDown={onKeyDown}
        className="modal-container"
      >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button
            type="button"
            ref={closeRef}
            onClick={onClose}
            className="modal-close"
            aria-label="Close Modal"
            aria-labelledby="close-modal"
          >
            <svg className="modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.querySelector("#modal-root")
  );
};

const Modal = props => {
  const { buttonRef, closeRef, triggerText, content } = props;

  const modalRef = useRef();
  const [shown, setShown] = useState(false);

  const toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  const showModal = () => {
    setShown(true);
    toggleScrollLock();
  };

  const onClose = () => {
    setShown(false);
    toggleScrollLock();
  };

  const onKeyDown = event => {
    if (event.keyCode === 27) onClose();
  };

  const onClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) return;
    onClose();
  };

  const modalTriggerProps = {
    showModal,
    buttonRef,
    triggerText
  };

  const modalContainerProps = {
    onClose,
    closeRef,
    modalRef,
    onKeyDown,
    onClickOutside
  };

  return (
    <>
      <ModalTrigger {...modalTriggerProps} />
      {shown ? (
        <ModalContainer {...modalContainerProps}>{content && content()}</ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
