import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
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

  return (
  <li className={styles.item}>
    <div className={styles.content} style={viewMode}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={ handleEditing }>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
    <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => console.log(e.target.value, itemProp.id)}
    />
  </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func
}