import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete, onUpdate, onView }) => {
  return (
    <div className="todo-item">
      <p>{todo.firstName} {todo.lastName}</p>
      <p>{todo.email}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onUpdate(todo)}>Update</button>
      <button onClick={() => onView(todo)}>View</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default TodoItem;
