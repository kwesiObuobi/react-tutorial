import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
const TodosList = ({ todosProps, setTodos, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func,
}

export default TodosList;
