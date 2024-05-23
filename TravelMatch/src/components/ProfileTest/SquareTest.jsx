import React, { useState } from "react";
import ButtonTest from "./ButtonTest";
import "./SquareTest.scss";

const SquareTest = ({
  title,
  option,
  onClick,
  currentIndex,
  TotalPreguntas,
  type,
}) => {
  const respuestas = Object.entries(option);
  const [selectedOption, setSelectedOption] = useState(
    type === "radio" ? null : []
  );
  const handleChange = (index, item, title) => {
    console.log("Item: ", item, title);
    if (type === "radio") {
      setSelectedOption(index);
    } else if (type === "checkbox") {
      setSelectedOption((prevState) =>
        prevState.includes(index)
          ? prevState.filter((i) => i !== index)
          : [...prevState, index]
      );
    }
  };

  return (
    <div className="askBox">
      <h3 className="askBox__title">{title}</h3>
      <section>
        {respuestas.map((item, index) => (
          <label className="askBox__label" key={index}>
            <input
              className="askBox__input"
              type={type}
              name={`option-${currentIndex}`}
              checked={
                type === "radio"
                  ? selectedOption === index
                  : selectedOption.includes(index)
              }
              onChange={() => handleChange(index, item, title)}
            />
            {`${item[0]}: ${item[1]}`}
          </label>
        ))}
      </section>
      {TotalPreguntas === currentIndex ? (
        <ButtonTest test="Enviar" onClick={onClick} />
      ) : (
        <ButtonTest test="Siguiente" onClick={onClick} />
      )}
      <div className="askBox__counter_container">
        <h4 className="askBox__counter">
          {currentIndex}/{TotalPreguntas}
        </h4>
      </div>
    </div>
  );
};

export default SquareTest;
