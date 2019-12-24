import doAlert from "./doAlert";

const handleError = error => {
  if (error && error.response && error.response.data && error.response.data.message) {
    doAlert(error.response.data.message, "error");
  } else if (error && error.response && error.response.data && error.response.data.error) {
    doAlert(error.response.data.error, "error");
  } else {
    doAlert("Something went wrong", "error");
  }
};

export default handleError;
