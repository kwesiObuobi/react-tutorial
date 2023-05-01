import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
const TodosList = ({ todosProps, setTodos }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos}/>
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
  setTodos: PropTypes.func,
}

export default TodosList;
