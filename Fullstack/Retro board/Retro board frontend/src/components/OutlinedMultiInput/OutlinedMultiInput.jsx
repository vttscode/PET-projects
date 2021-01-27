import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './OutlinedMultiInput.styles.css';

const OutlinedMultiInput = ({ onClick }) => {
  const [commentInput, setCommentInput] = useState('');
  const handleChange = event => {
    setCommentInput(event.target.value);
  };

  const handleOnClick = () => {
    onClick(commentInput);
  };

  return (
    <Grid className="outlined-multi-input">
      <TextField
        value={commentInput}
        onChange={handleChange}
        id="outlined-basic"
        label="Enter comment"
        multiline
        variant="filled"
        style={{ width: '100%' }}
      />
      <Button type="button" onClick={handleOnClick}>
        Add
      </Button>
    </Grid>
  );
};

export default OutlinedMultiInput;
