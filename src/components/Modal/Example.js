import React, { useRef } from "react";
import Modal from "components/Modal/Modal";

const Content1 = ({ closeRef }) => {
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

const Content2 = ({ closeRef }) => {
  return (
    <div>
      How are you doing sir!!!!
      <div>This is interesting sir</div>
      <div>you are doing very well sir .. thnk You</div>
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

const Example = () => {
  const closeModalRef = useRef(null);
  const triggerButtonRef = useRef(null);

  const closeModalRef2 = useRef(null);
  const triggerButtonRef2 = useRef(null);

  const modalPropsForLogin = {
    closeRef: closeModalRef,
    // triggerText: "Open modal",
    buttonRef: triggerButtonRef,
    content: () => <Content1 closeRef={closeModalRef} />
  };

  const modalPropsForLogout = {
    closeRef: closeModalRef2,
    // triggerText: "Open modal2",
    buttonRef: triggerButtonRef2,
    content: () => <Content2 closeRef={closeModalRef2} />
  };

  return (
    <>
      <button type="button" onClick={() => triggerButtonRef.current.click()}>
        open modal
      </button>

      <button type="button" onClick={() => triggerButtonRef2.current.click()}>
        open modal2
      </button>

      <Modal {...modalPropsForLogin} />
      <Modal {...modalPropsForLogout} />
    </>
  );
};

export default Example;
