import React from "react";
import { Button } from "semantic-ui-react";

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

const Preview = ({ details }) => {
  return (
    <div style={{ marginTop: "4rem" }}>
      {details.map(info => (
        <ViewBox info={info} />
      ))}

      <div style={{ marginBottom: 30 }}>
        <Button color="teal" fluid style={{ marginTop: "5rem" }}>
          Compare
        </Button>
      </div>
    </div>
  );
};

export default Preview;
