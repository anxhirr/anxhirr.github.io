import React, { useRef, useState } from 'react';

const ToDoItems = ({ todoItems, setTodoItems }) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef();

  const onEditItem = (e, itemIndex) => {
    const newValue = e.target.value;
    const newTodos = todoItems.map((item, i) =>
      i === itemIndex ? (item = newValue) : item
    );

    setTodoItems(newTodos);
  };

  const handleEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      inputRef.current.focus();
    } else {
      setIsEdit(true);
    }
  };

  const handleDelete = (index) => {
    const newTodos = todoItems.filter((_, i) => i !== index);

    setTodoItems(newTodos);
  };
  return (
    <>
      {todoItems.map((item, itemIndex) => (
        <li key={itemIndex} className='todo__item flex-r-space'>
          {!isEdit && <div className='todo__item--text'>{item}</div>}
          {isEdit && (
            <input
              ref={inputRef}
              onChange={(e) => onEditItem(e, itemIndex)}
              className='todo__item--input'
              type='text'
              value={item}
            />
          )}

          <div className='todo__item--btns-box'>
            <button
              onClick={() => handleEdit(itemIndex)}
              className='btn btn--purple'
            >
              {isEdit ? 'Save' : 'Edit'}
            </button>
            <button
              onClick={(e) => handleDelete(itemIndex)}
              className='btn btn--red'
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default ToDoItems;
