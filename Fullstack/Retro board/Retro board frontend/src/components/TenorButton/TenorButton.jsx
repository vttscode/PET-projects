import React from 'react';
import GifIcon from '@material-ui/icons/Gif';
import IconButton from '@material-ui/core/IconButton';

const TenorButton = ({ setModalState, columnId, itemId }) => {
  return (
    <>
      <IconButton onClick={() => setModalState({ isModalOpen: true, columnId, itemId })}>
        <GifIcon />
      </IconButton>
    </>
  );
};

export default TenorButton;
