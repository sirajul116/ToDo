import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todosSlice';
import TodoForm from './components/TodoForm';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Container maxwidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        ToDo
      </Typography>
      <TodoForm onSaveTodo={handleAddTodo} />
    </Container>
  );
}

export default App;
