import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

const TodoForm = ({ onSaveTodo }) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({
    description: '',
    id: Date.now(),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTodo({ description: '', id: Date.now() });
  };

  const handleSave = () => {
    onSaveTodo(todo);
    setTodo({ description: '', id: Date.now() });
    handleClose();
  };

  return (
    <div>
      <Typography align="center">
        <Button
          bariant="outlined"
          color="secondary"
          size="large"
          onClick={handleClickOpen}
          style={{ marginBottom: '2rem' }}
          sx={{
            bgcolor: 'background.paper',
            border: 1,
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
          }}
        >
          Add ToDo
        </Button>
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New ToDo</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;
