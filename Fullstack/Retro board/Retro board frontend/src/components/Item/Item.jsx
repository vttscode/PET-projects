import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import './Item.css';
import { Draggable } from 'react-beautiful-dnd';
import TenorButton from '../TenorButton';
import Comments from '../Comments/Comments';
import OutlinedMultiInput from '../OutlinedMultiInput/OutlinedMultiInput';

const Item = ({
  text,
  colorClass,
  isVotable,
  voteCount,
  upVote,
  comments,
  addComment,
  columnId,
  itemId,
  dndIndex,
}) => {
  const [displayComments, setDisplayComments] = useState(false);

  const handleOnClickAddComment = commentInput => {
    const commentObj = {
      id: uuid(),
      text: commentInput,
    };
    return addComment({ columnId, itemId, commentObj });
  };

  return (
    <>
      <Draggable draggableId={itemId} index={dndIndex}>
        {provided => (
          <Grid
            item
            xs={12}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <div className={colorClass}>
              <p className="item-text">{text}</p>
              <Grid item container direction="row-reverse">
                {isVotable && (
                  <IconButton
                    className="icon-button"
                    onClick={() => upVote({ columnId, itemId })}
                    aria-label="upvote"
                  >
                    <ThumbUpIcon />
                    <div>{voteCount}</div>
                  </IconButton>
                )}
                <IconButton
                  className="icon-button"
                  onClick={() => setDisplayComments(!displayComments)}
                  aria-label="comment"
                >
                  <CommentIcon />
                  <div>{comments.length}</div>
                </IconButton>
                <TenorButton columnId={columnId} itemId={itemId} />
              </Grid>

              {displayComments && (
                <>
                  <OutlinedMultiInput onClick={handleOnClickAddComment} />
                  <Comments comments={comments} />
                </>
              )}
            </div>
          </Grid>
        )}
      </Draggable>
    </>
  );
};
export default Item;
