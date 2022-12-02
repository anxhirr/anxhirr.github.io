import React, { useState } from 'react';

const BUTTONS = [
  { text: 'C', id: 1 },
  { text: 'DEL', id: 2 },
  { text: '%', id: 3 },
  { text: '/', id: 4 },
  { text: 7, id: 5, isNumber: true },
  { text: 8, id: 6, isNumber: true },
  { text: 9, id: 7, isNumber: true },
  { text: 'x', id: 8 },
  { text: 4, id: 9, isNumber: true },
  { text: 5, id: 10, isNumber: true },
  { text: 6, id: 11, isNumber: true },
  { text: '-', id: 12 },
  { text: 1, id: 13, isNumber: true },
  { text: 2, id: 14, isNumber: true },
  { text: 3, id: 15, isNumber: true },
  { text: '+', id: 16 },
  { text: 0, id: 17, isNumber: true },
  { text: '.', id: 18 },
  { text: '=', id: 19 },
];

// let array = [];

const Calculator = () => {
  const [result, setResult] = useState('');
  // const [numberValue, setNumberValue] = useState('');
  const [array, setArray] = useState([]);

  const handleClick = (btn) => {
    if (btn.isNumber) {
      if (array.length === 0) {
        setArray(btn.text);
      }
      if (array.length > 0) {
        setArray((prev) => prev + btn.text);
        console.log('number');
        console.log(array);

        // let newArr = [...array];

        // array.forEach((_, i) => {
        //   if (i === newArr.length - 1) {
        //     newArr[i] += btn.text;
        //   }
        // });
        // const newArr = array.map((arrItem, i) => {
        //   if (i === array.length - 1) {
        //     return array;
        //   }
        //   return arrItem;
        // });

        // console.log(newArr);
        // console.log(array);

        // return setArray(newArr);
      }

      // const newArr = array.map((arrItem, i) => {
      //   if (i === array.length - 1) {
      //     return array;
      //   }
      //   return arrItem;
      // });

      // setArray(newArr);

      // setNumberValue((prev) => prev.concat(btn.text));
    }

    if (btn.text === '+') {
      array = '';
      if (array[array.length - 1] !== '+') {
        // setArray((prev) => [...prev, btn.text]);
      }

      // setNumberValue((prev) => prev.concat(btn.text));
    }
    if (btn.text === '=') {
      console.log(array);
      // setResult(eval(numberValue));
    }
    if (btn.text === 'DEL') {
      // setNumberValue((prev) => prev.slice(0, prev.length - 1));
    }
    if (btn.text === 'C') {
      // setNumberValue('0');
      // setResult('0');
    }
  };
  return (
    <section className='calculator'>
      <div className='calculator__content container'>
        <div className='calculator__output'>
          <input readOnly value={result ?? 0} />
          {/* <input readOnly value={numberValue} /> */}
        </div>
        <div className='calculator__keypad'>
          {BUTTONS.map((btn) => {
            return (
              <button
                key={btn.id}
                className='calculator__btn'
                onClick={() => handleClick(btn)}
              >
                {btn.text}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
