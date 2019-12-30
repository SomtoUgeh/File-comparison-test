import React from "react";
import { Button, Modal, Header } from "semantic-ui-react";

const Results = ({
  firstStudent,
  secondStudent,
  history,
  isAvailable,
  handleCompareStrings,
  similarityPercentage
}) => (
  <div>
    <Modal
      trigger={
        <Button
          fluid
          color="teal"
          style={{ marginTop: "5rem", marginBottom: "8rem" }}
          onClick={() => handleCompareStrings(isAvailable)}
        >
          Compare
        </Button>
      }
      closeIcon
    >
      <Header content="Results!" />
      <Modal.Content>
        <div style={{ textAlign: "center", fontSize: 20 }}>
          The similarity score between{" "}
          <span className="view-box__title-heading">
            {firstStudent.student}'s - {firstStudent.name}
          </span>{" "}
          and{" "}
          <span className="view-box__title-heading">
            {secondStudent.student}'s - {secondStudent.name}
          </span>{" "}
          is
        </div>
        <div className="big-score">{`${Number(similarityPercentage)}%`}</div>
      </Modal.Content>

      <Modal.Actions>
        <Button color="green" onClick={() => history.push("/")}>
          Save and return home
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
);

export default Results;
