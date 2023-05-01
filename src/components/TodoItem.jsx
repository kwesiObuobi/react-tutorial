import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
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

  return (
  <li className={styles.item}>
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
  </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func
}