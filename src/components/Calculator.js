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
    { label: 'AC', className: 'light-bg' }, { label: '+/-', className: 'light-bg' }, { label: '%', className: 'light-bg' }, { label: '/', className: 'golden-bg' },
    { label: '7', className: 'light-bg' }, { label: '8', className: 'light-bg' }, { label: '9', className: 'light-bg' }, { label: 'x', className: 'golden-bg' },
    { label: '4', className: 'light-bg' }, { label: '5', className: 'light-bg' }, { label: '6', className: 'light-bg' }, { label: '+', className: 'golden-bg' },
    { label: '1', className: 'light-bg' }, { label: '2', className: 'light-bg' }, { label: '3', className: 'light-bg' }, { label: '-', className: 'golden-bg' },
    { label: '0', className: 'light-bg' }, { label: '=', className: 'golden-bg equals' },
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
          {buttons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className={`items ${btn.className}`}
              onClick={() => clickHandler(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Calculator;
