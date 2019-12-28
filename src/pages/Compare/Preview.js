import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import stringSimilarity from "string-similarity";
import { Button, Modal, Header } from "semantic-ui-react";
import { HistoryContext } from "contexts/HistoryContext";

const ViewBox = ({ info }) => (
  <div className="view-box">
    <div className="view-box__title">
      <div>
        <span className="view-box__title-heading">Student: </span>
        {info.student}
      </div>
      <div>
        <span className="view-box__title-heading">File name: </span>
        {info.name}
      </div>
    </div>
    <div className="view-box__content">
      <span className="view-box__title-heading">Content</span>
      <div className="view-box__content-core">{info.content}</div>
    </div>
  </div>
);

const Results = ({
  firstStudent,
  secondStudent,
  history,
  handleCompareStrings,
  similarityPercentage
}) => (
  <div>
    <Modal
      trigger={
        <Button color="teal" fluid style={{ marginTop: "5rem" }} onClick={handleCompareStrings}>
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

const Preview = ({ details }) => {
  const { handleAddHistory } = useContext(HistoryContext);
  const [similarityPercentage, setSimilarityPercentage] = useState(0);

  const history = useHistory();
  const [firstStudent, secondStudent] = details;

  const handleCompareStrings = () => {
    let strings;

    strings = details.map(({ content }) => content);
    const [firstString, secondString] = strings;

    const similaritiesScore = stringSimilarity.compareTwoStrings(firstString, secondString);

    const stringComparisonComplete = {
      score: (Number(similaritiesScore) * 100).toFixed(2),
      details
    };

    handleAddHistory(stringComparisonComplete);

    setSimilarityPercentage((Number(similaritiesScore) * 100).toFixed(2));
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      {details.map(info => (
        <ViewBox info={info} />
      ))}

      <div style={{ marginBottom: 30 }}>
        <Results
          history={history}
          firstStudent={firstStudent}
          secondStudent={secondStudent}
          handleCompareStrings={handleCompareStrings}
          similarityPercentage={similarityPercentage}
        />
      </div>
    </div>
  );
};

export default Preview;
