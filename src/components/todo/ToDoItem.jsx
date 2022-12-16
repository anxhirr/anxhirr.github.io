import React, { useState } from 'react'

const ToDoItem = ({ todoItems, setTodoItems }) => {
  const [edittedName, setEdittedName] = useState('')

  const handleEdit = (index) => {
    const newTodos = todoItems.map((item, i) => {
      if (i === index) {
        item.edit = true
        setEdittedName(item.name)
      }
      return item
    })
    setTodoItems(newTodos)
  }
  const handleSave = (index) => {
    const newTodos = todoItems.map((item, i) => {
      if (i === index) {
        item.edit = false
        item.name = edittedName
      }
      return item
    })
    setTodoItems(newTodos)
  }

  const handleDelete = (index) => {
    const newTodos = todoItems.filter((_, i) => i !== index)

    setTodoItems(newTodos)
  }

  const handleInput = (e) => {
    setEdittedName(e.target.value)
  }

  return todoItems.map((item, itemIndex) => {
    return (
      <li key={itemIndex} className='todo__item flex-r-space u-margin-b--tiny'>
        {item.edit ? (
          <input
            className='todo__item-input'
            onChange={handleInput}
            value={edittedName}
          />
        ) : (
          <p className='todo__item--text'>
            <span>{itemIndex + 1}. </span>

            {item.name}
          </p>
        )}

        <div className='todo__item--btns-box '>
          {item.edit ? (
            <button
              onClick={() => handleSave(itemIndex)}
              className='btn btn--purple'
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit(itemIndex)}
              className='btn btn--purple'
            >
              Edit
            </button>
          )}
          <button
            onClick={() => handleDelete(itemIndex)}
            className='btn btn--red'
          >
            Delete
          </button>
        </div>
      </li>
    )
  })
}

export default ToDoItem
