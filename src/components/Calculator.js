import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './Result';

const Calculator = () => {
  const [value, setValue] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, operation, next } = value;

  const buttons = [
    ['AC', 'light-bg'], ['+/-', 'light-bg'], ['%', 'light-bg'], ['/', 'golden-bg'],
    ['7', 'light-bg'], ['8', 'light-bg'], ['9', 'light-bg'], ['x', 'golden-bg'],
    ['4', 'light-bg'], ['5', 'light-bg'], ['6', 'light-bg'], ['+', 'golden-bg'],
    ['1', 'light-bg'], ['2', 'light-bg'], ['3', 'light-bg'], ['-', 'golden-bg'],
    ['0', 'light-bg'], ['=', 'golden-bg'],
  ];

  function clickHandler(num) {
    setValue(calculate(value, num));
  }
  return (
    <div className="math-container">
      <div className="container">
        <h2 className="heading">Lets do some Math</h2>
        <section className="section">
          <div className="results gray-bg flex-container">
            <Result result={next || operation || total || '0'} />
          </div>
          {buttons.map((btn, index) => (
            <button
              key={index}
              type="button"
              className={`items item${index + 1} ${btn[1]}`}
              onClick={() => clickHandler(btn[0])}
            >
              {btn[0]}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Calculator;
