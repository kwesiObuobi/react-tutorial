import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  return <li>{itemProp.title}</li>;
};

export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.any
}