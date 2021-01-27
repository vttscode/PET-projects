import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './Column.css';
import { v4 as uuid } from 'uuid';
import { Droppable } from 'react-beautiful-dnd';
import Item from '../Item';
import ColumnItemInput from '../ColumnItemInput';

export default function Column({ column, addColumnInput }) {
  const handleAddItemInput = () => addColumnInput({ columnId: column.id, inputId: uuid() });

  return (
    <div>
      <Grid className="column">
        <div className="column-header" id={column.id}>
          <h2>{column.name}</h2>
          <Button variant="contained" onClick={handleAddItemInput} fullWidth>
            +
          </Button>
        </div>

        <Droppable droppableId={column.id}>
          {provided => (
            <Grid className="items" {...provided.droppableProps} innerRef={provided.innerRef}>
              {column.inputs.map((input, index) => (
                <ColumnItemInput key={input.id} index={index} columnId={column.id} />
              ))}

              {column.items.map((item, index) => (
                <Item
                  colorClass={column.id}
                  text={item.text}
                  voteCount={item.voteCount}
                  isVotable={column.isVotable}
                  columnId={column.id}
                  itemId={item.itemId}
                  comments={item.comments}
                  key={item.itemId}
                  dndIndex={index}
                />
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </Grid>
    </div>
  );
}
