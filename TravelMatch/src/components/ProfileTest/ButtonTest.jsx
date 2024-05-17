import React from "react";
import "./ButtonTest.scss";

const ButtonTest = ({ test, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {test}
    </button>
  );
};

export default ButtonTest;
