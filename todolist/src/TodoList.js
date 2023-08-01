import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onDelete, onUpdate, onView }) => {
  return (
    <React.Fragment>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} onView={onView} />
      ))}
    </React.Fragment>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default TodoList;
