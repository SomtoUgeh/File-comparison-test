import React, { useRef } from "react";
import Modal from "./Modal";

const Content = ({ closeRef }) => {
  return (
    <div>
      How are you doing sir!!!!
      <div>This is interesting sir</div>
      <div>
        <button
          type="button"
          onClick={() => {
            closeRef.current.click();
          }}
        >
          Close me
        </button>

        <button
          type="submit"
          onClick={() => {
            closeRef.current.click();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export const Example = () => {
  const closeModalRef = useRef(null);
  const triggerButtonRef = useRef(null);

  const modalPropsForLogin = {
    closeRef: closeModalRef,
    // triggerText: "Open modal",
    buttonRef: triggerButtonRef,
    content: () => <Content closeRef={closeModalRef} />
  };

  return (
    <>
      <div>
        <button onClick={() => triggerButtonRef.current.click()}>Hi</button>
      </div>

      <Modal {...modalPropsForLogin} />
    </>
  );
};

export default Example;
