import React, { useRef, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import ToDoItem from './ToDoItem';

const ToDo = () => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, setTodoItems] = useLocalStorage('todo', []);
  const [addTodoInput, setAddTodoInput] = useState('');

  const hasItemsToDo = !!todoItems.length;

  const handleSubit = (e) => {
    e.preventDefault();
    if (!addTodoInput) return alert('provide some text');

    setTodoItems((prevItems) => {
      return [...prevItems, { name: addTodoInput, edit: false }];
    });
    setAddTodoInput('');
  };

  return (
    <section className='todo'>
      <div className='todo__content container'>
        <h1 className='heading--primary '>Simple To-Do List</h1>
        <form onSubmit={handleSubit} className='todo__add flex-r-center '>
          <div className='todo__input--box'>
            <input
              onChange={(e) => setAddTodoInput(e.target.value)}
              value={addTodoInput}
              className='todo__input'
              placeholder='New Plans? Write them here..'
            />
          </div>
          <button type='submit' className='btn btn--purple'>
            Add Task
          </button>
        </form>
        {hasItemsToDo && (
          <div>
            <h2 className='heading--secondary  '>To-Do Tasks:</h2>
          </div>
        )}

        <ul className='todo__list'>
          <ToDoItem todoItems={todoItems} setTodoItems={setTodoItems} />
        </ul>
      </div>
    </section>
  );
};

export default ToDo;
