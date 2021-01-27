import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column';

export default function Columns({ columns, dragDropItem }) {
  const onDragEnd = useCallback(
    ({ source, destination, draggableId }) => {
      if (destination) {
        const toColumnId = destination.droppableId;
        const columnId = source.droppableId;
        const itemId = draggableId;
        const from = { columnId, itemId };
        if (columnId !== toColumnId) {
          dragDropItem({ toColumnId, from });
        }
      }
    },
    [dragDropItem]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container direction="row">
        {columns.map((column, index) => (
          <Grid item xs={4} className="myboard">
            <Column column={column} key={column.id} dndIndex={index} />
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
}
