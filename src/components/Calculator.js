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
          <button
            type="button"
            className="items item1 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            AC
          </button>
          <button
            type="button"
            className="items item2 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            +/-
          </button>
          <button
            type="button"
            className="items item3 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            %
          </button>
          <button
            type="button"
            className="items item4 golden-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            /
          </button>
          <button
            type="button"
            className="items item5 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            7
          </button>
          <button
            type="button"
            className="items item6 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            8
          </button>
          <button
            type="button"
            className="items item7 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            9
          </button>
          <button
            type="button"
            className="items item8 golden-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            x
          </button>
          <button
            type="button"
            className="items item9 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            4
          </button>
          <button
            type="button"
            className="items item10 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            5
          </button>
          <button
            type="button"
            className="items item11 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            6
          </button>
          <button
            type="button"
            className="items item12 golden-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            +
          </button>
          <button
            type="button"
            className="items item13 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            1
          </button>
          <button
            type="button"
            className="items item14 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            2
          </button>
          <button
            type="button"
            className="items item15 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            3
          </button>
          <button
            type="button"
            className="items item16 golden-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            -
          </button>
          <button
            type="button"
            className="items item17 light-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            0
          </button>
          <button
            type="button"
            className="items item18 golden-bg"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            =
          </button>
        </section>
      </div>
    </div>
  );
};

export default Calculator;
