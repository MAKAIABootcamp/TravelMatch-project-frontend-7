import React from "react";
import ButtonTest from './ButtonTest';
import './SquareTest.scss';

const SquareTest = ({ title, option }) => {
  const respuestas = Object.entries(option);
  return (
    <div className = 'askBox'>
      <h2>{title}</h2>
      <section>
        {respuestas.map((item, index) => (
          <label key={index}>
            <input type="checkbox" />
            {`${item[0]}: ${item[1]}`}
          </label>
        ))}
      </section>
      <ButtonTest test="Siguiente" />
    </div>
  );
};

export default SquareTest;
