import React from "react";

const FaqQuestion = (props) => {
  return (
    <>
      <div className="container">
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.index}) <span>{props.que}</span>
        </p>

        <p style={{ fontSize: "16px" }}>{props.ans}</p>
      </div>
    </>
  );
};

export default FaqQuestion;
