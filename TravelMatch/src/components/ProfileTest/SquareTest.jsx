// import React from "react";
import React, {useState} from "react";
import ButtonTest from "./ButtonTest";
import "./SquareTest.scss";

const SquareTest = ({ title, option, onClick }) => {
  const respuestas = Object.entries(option);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="askBox">
      <h2>{title}</h2>
      <section>
        {respuestas.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              checked={selectedOption === index}
              onChange={() => handleChange(index)}
            />
            {`${item[0]}: ${item[1]}`}
          </label>
        ))}
      </section>
      <ButtonTest test="Siguiente" onClick={onClick} />
    </div>
  );
};

export default SquareTest;