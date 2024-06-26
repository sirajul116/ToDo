import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './redux/todosSlice';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (todo) => {
    dispatch(editTodo(todo));
  };

  return (
    <Container maxwidth="lg">
      <Typography
        variant="h3"
        align="center"
        gutterBottom={true}
        sx={{ textDecoration: 'underline' }}
      >
        ToDo
      </Typography>
      <TodoForm onSaveTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </Container>
  );
}

export default App;
