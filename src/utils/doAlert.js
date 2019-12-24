import cogoToast from "cogo-toast";

const doAlert = (message, type, style = { position: "top-center" }) => {
  if (type === "success") {
    cogoToast.success(message, style);
  } else if (type === "error") {
    cogoToast.error(message, style);
  } else {
    cogoToast.info(message, style);
  }
};

export default doAlert;
