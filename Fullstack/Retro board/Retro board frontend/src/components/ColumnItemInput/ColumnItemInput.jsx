import React, { useState } from 'react';
import { IconButton, OutlinedInput, InputAdornment } from '@material-ui/core';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import './ColumnItemInput.css';
import { v4 as uuid } from 'uuid';

export default function ColumnItemInput({ addItem, removeColumnInput, columnId, index }) {
  const [input, setInput] = useState('');
  const handleInputChange = e => setInput(e.target.value);

  const handleAddItem = () =>
    addItem({
      item: {
        columnId,
        itemId: uuid(),
        text: input,
        voteCount: 0,
        comments: [],
      },
      index,
    });

  const handleRemoveColumnInput = () => removeColumnInput({ columnId, index });

  return (
    <OutlinedInput
      className="input-container"
      fullWidth
      variant="outlined"
      onChange={handleInputChange}
      value={input}
      startAdornment={
        <InputAdornment position="start">
          <IconButton onClick={handleAddItem}>
            <AddBoxRoundedIcon color="primary" />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={handleRemoveColumnInput}>
            <DeleteOutlineRoundedIcon color="secondary" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
