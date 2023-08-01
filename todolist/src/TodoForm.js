import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email });
    setFirstName('');
    setLastName('');
    setEmail('');
    inputRef.current.focus();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        ref={inputRef}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
