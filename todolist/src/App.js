
import React, { useState, useEffect, useRef } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const formRef = useRef();

  useEffect(() => {
   
    const mockTodos = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    ];
    setTimeout(() => {
      setTodos(mockTodos);
      setLoading(false);
    }, 2000);
  }, []);

  const handleAddTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
    formRef.current.focusInput2();
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (todo) => {
   
  };

  const handleViewTodo = (todo) => {
   
  };

  return (
    <div className="app">
      <h1>TODO List</h1>
      <TodoForm onSubmit={handleAddTodo} ref={formRef} />
      {loading ? <p>Loading...</p> : <TodoList todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} onView={handleViewTodo} />}
    </div>
  );
};

export default App;
