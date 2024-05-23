import React from "react";
import "./Questions.scss";

const Question = ({ question, handleChange, currentAnswer }) => {
  const handleOptionChange = (e) => {
    const value = question.respuestas[e.target.value];
    handleChange(question.id, value);
  };

  return (
    <div className="question">
      <h2>{question.title}</h2>
      <div className="options">
        {Object.keys(question.respuestas).map((key) => (
          <label key={key}>
            <input
              type={question.type}
              name={`question-${question.id}`}
              value={key}
              checked={currentAnswer === question.respuestas[key]}
              onChange={handleOptionChange}
            />
            {question.respuestas[key]}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
