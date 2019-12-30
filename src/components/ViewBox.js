import React from "react";

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

export default ViewBox;
