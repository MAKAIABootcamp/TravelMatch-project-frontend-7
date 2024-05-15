import React from 'react';
import './ButtonTest';
import './ButtonTest.scss';

 const ButtonTest = ({test, onClick}) => {
  return (
    <button onClick={onClick}>{test}
    
    </button>

  )
}

export default ButtonTest;

