import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
const TodosList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
}

export default TodosList;
