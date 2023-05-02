import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setUpdate(updateInput, itemProp.id)
      setEditing(false);
    }
  }

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
  <li className={styles.item}>
    <div className={styles.content} style={viewMode}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={ handleEditing }><AiFillEdit /></button>
      <button onClick={() => delTodo(itemProp.id)}><FaTrash /></button>
      <span style={itemProp.completed ? completedStyle : null}>
        {updateInput}
      </span>
    </div>
    <input
      type="text"
      value={updateInput}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => setUpdateInput(e.target.value)}
      onKeyDown={handleUpdatedDone}
    />
  </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
}