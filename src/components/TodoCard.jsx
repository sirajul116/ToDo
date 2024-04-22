import React, { useState } from 'react';
import { Delete, ExpandLess, ExpandMore, Edit } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';

const TodoCard = ({ todo, onDeleteTodo, onEditTodo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const [open, setOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({ ...todo });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onEditTodo(newTodo);
    handleClose();
  };

  return (
    <>
      <Card
        sx={{
          transition: 'transform 0.3s',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: `0 0 10px 3px blue`,
            transform: 'scale(1.02)',
          },
        }}
        xs={12}
      >
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              whiteSpace: 'normal',
              maxHeight: showFullDescription ? 'none' : '3em',
              overflow: 'hidden',
              justifyContent: 'stretch',
            }}
          >
            {todo.description}
          </Typography>
          {todo.description.length > 100 && (
            <IconButton onClick={handleToggleDescription}>
              {showFullDescription ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDeleteTodo(todo.id)}
          >
            <Delete />
          </IconButton>
          <IconButton edge="end" aria-label="edit" onClick={handleClickOpen}>
            <Edit />
          </IconButton>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit ToDo</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={5}
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
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
    </>
  );
};

export default TodoCard;
