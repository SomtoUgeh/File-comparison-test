import React, { useContext, useState } from "react";
import uuid from "uuid/v4";
import ViewBox from "components/ViewBox";
import Results from "components/Results";
import { useHistory } from "react-router-dom";
import { getUser } from "utils/cookieHelpers";
import stringSimilarity from "string-similarity";
import { HistoryContext } from "contexts/HistoryContext";

const Preview = ({ details, isAvailable }) => {
  const { handleAddHistory } = useContext(HistoryContext);
  const [similarityPercentage, setSimilarityPercentage] = useState(0);

  const history = useHistory();
  const { userId } = getUser();

  const [firstStudent, secondStudent] = details;

  const handleCompareStrings = isAvailable => {
    let strings;

    strings = details.map(({ content }) => content);
    const [firstString, secondString] = strings;

    const similaritiesScore = stringSimilarity.compareTwoStrings(firstString, secondString);

    const stringComparisonComplete = {
      id: uuid,
      userId,
      score: (Number(similaritiesScore) * 100).toFixed(2),
      details
    };

    setSimilarityPercentage((Number(similaritiesScore) * 100).toFixed(2));

    if (isAvailable) return;
    else handleAddHistory(stringComparisonComplete);
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      {details.map(info => (
        <ViewBox info={info} />
      ))}

      <div style={{ marginBottom: 30 }}>
        <Results
          history={history}
          isAvailable={isAvailable}
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
