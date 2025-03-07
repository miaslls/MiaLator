import './App.css';

import { useState } from 'react';

type Operator = '+' | '-' | '*' | '/';

function App() {
  const [firstOperand, setFirstOperand] = useState<number | undefined>(undefined);
  const [operator, setOperator] = useState<Operator | undefined>(undefined);
  const [secondOperand, setSecondOperand] = useState<number | undefined>(undefined);

  const clear = () => {
    setFirstOperand(undefined);
    setOperator(undefined);
    setSecondOperand(undefined);
  };

  const calculate = () => {
    if (!firstOperand || !operator) return;
    if (secondOperand === undefined) {
      setOperator(undefined);
      return;
    }

    let result: number;

    if (operator === '+') result = firstOperand + secondOperand;
    else if (operator === '-') result = firstOperand - secondOperand;
    else if (operator === '*') result = firstOperand * secondOperand;
    else {
      if (secondOperand === 0) {
        alert('THE UNIVERSE EXPLODED!');
        clear();
        return;
      } else result = firstOperand / secondOperand;
    }

    setFirstOperand(result);
    setOperator(undefined);
    setSecondOperand(undefined);
  };

  const clickNumber = (num: number) => {
    if (firstOperand === undefined) setFirstOperand(num);
    else if (!operator) setFirstOperand((prev) => Number(`${prev}${num}`));
    else if (secondOperand === undefined) setSecondOperand(num);
    else setSecondOperand((prev) => Number(`${prev}${num}`));
  };

  const clickOperator = (op: Operator) => {
    if (firstOperand === undefined) setFirstOperand(0);
    if (secondOperand === undefined) setOperator(op);
  };

  return (
    <>
      <h1>MiaLator</h1>
      <div className='calculator'>
        <div className='display'>
          {firstOperand ?? 0}
          {operator ? ` ${operator}` : ''}
          {secondOperand !== undefined ? ` ${secondOperand}` : ''}
        </div>
        <div className='buttons'>
          <button onClick={() => clickNumber(7)}>7</button>
          <button onClick={() => clickNumber(8)}>8</button>
          <button onClick={() => clickNumber(9)}>9</button>
          <button className='operator' onClick={() => clickOperator('/')}>
            /
          </button>
          <button onClick={() => clickNumber(4)}>4</button>
          <button onClick={() => clickNumber(5)}>5</button>
          <button onClick={() => clickNumber(6)}>6</button>
          <button className='operator' onClick={() => clickOperator('*')}>
            *
          </button>
          <button onClick={() => clickNumber(1)}>1</button>
          <button onClick={() => clickNumber(2)}>2</button>
          <button onClick={() => clickNumber(3)}>3</button>
          <button className='operator' onClick={() => clickOperator('-')}>
            -
          </button>
          <button className='zero' onClick={() => clickNumber(0)}>
            0
          </button>
          <button onClick={clear}>C</button>
          <button className='operator' onClick={() => clickOperator('+')}>
            +
          </button>
          <button className='equals' onClick={calculate}>
            =
          </button>
        </div>
      </div>
      <p style={{ textAlign: 'right', paddingRight: '10px' }}>0.1.0-alpha</p>
    </>
  );
}

export default App;
