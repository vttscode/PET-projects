import { GridList, GridListTile, IconButton } from '@material-ui/core';
import { HighlightOffRounded, Search } from '@material-ui/icons';
import React from 'react';
import CustomizedInputButton from '../CustomizedInputButton/CustomizedInputButton';
import './TenorGifList.styles.css';

const TenorGifList = ({ gifLinks, searchForGif, selectGif, setModalState, columnId, itemId }) => (
  <>
    <div className="separate-exit">
      <div>
        <CustomizedInputButton
          Icon={Search}
          placeHolder="enter gif keyword"
          arialLabel="gif-search"
          buttonClick={searchForGif}
        />
      </div>

      <IconButton type="button" onClick={() => setModalState({ isModalOpen: false })}>
        <HighlightOffRounded />
        {/* <HighlightOffIcon /> */}
      </IconButton>
    </div>

    <GridList className="grid-list" cols={0}>
      {gifLinks.map(gif => (
        <GridListTile
          onClick={() => selectGif({ url: gif.url, columnId, itemId })}
          style={{ height: '160px' }}
          key={gif.id}
        >
          <img className="animated-gif" src={gif.url} alt="...loading" key={gif.id} />
        </GridListTile>
      ))}
    </GridList>
  </>
);

export default TenorGifList;
