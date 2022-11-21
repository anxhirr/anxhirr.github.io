import React, { useState } from 'react';
import ToDoItems from './ToDoItems';

const ToDo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [input, setInput] = useState('');

  const hasItemsToDo = !!todoItems.length;

  const handleAdd = () => {
    if (!input) return alert('provide some text');

    setTodoItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput('');
  };

  return (
    <section className='todo'>
      <div className='todo__content container'>
        <h1 className='heading--primary u-margin-b--small'>
          Simple To-Do List
        </h1>
        <div className='todo__add flex-r-center u-margin-b--small'>
          <div className='todo__input--box'>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className='todo__input'
              placeholder='New Plans? Write them here..'
            />
          </div>
          <button onClick={handleAdd} className='btn btn--purple'>
            Add Task
          </button>
        </div>
        {hasItemsToDo && (
          <h2 className='heading--secondary  u-margin-b--small'>To-Do Tasks</h2>
        )}
        <ul className='todo__list'>
          <ToDoItems todoItems={todoItems} setTodoItems={setTodoItems} />
        </ul>
      </div>
    </section>
  );
};

export default ToDo;
