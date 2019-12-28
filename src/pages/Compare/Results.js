import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

const Results = () => {
  const {
    state: { stringComparisonComplete }
  } = useLocation();

  const history = useHistory();

  const [firstStudent, secondStudent] = stringComparisonComplete.details;

  return (
    <div>
      <Header as="h1">Results</Header>

      <div>
        The similarity score between{" "}
        <span className="view-box__title-heading">
          {firstStudent.student}'s - {firstStudent.name}
        </span>{" "}
        and
        <span className="view-box__title-heading">
          {secondStudent.student}'s - {secondStudent.name}
        </span>{" "}
        is
      </div>
      <div className="big-score">{`${Number(stringComparisonComplete.score)}%`}</div>

      <div style={{ marginBottom: 30 }}>
        <Button color="teal" fluid style={{ marginTop: "5rem" }} onClick={() => history.push("/")}>
          Save and return home
        </Button>
      </div>
    </div>
  );
};

export default Results;
