/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialGifs = [
  {
    id: 1,
    url: 'loadingError.png',
  },
  {
    id: 2,
    url: 'loadingError.png',
  },
  {
    id: 3,
    url: 'loadingError.png',
  },
  {
    id: 4,
    url: 'loadingError.png',
  },
  {
    id: 5,
    url: 'loadingError.png',
  },
  {
    id: 6,
    url: 'loadingError.png',
  },
];

const initialState = {
  gifLinks: initialGifs,
  isModalOpen: false,
  columnId: null,
  itemId: null,
};

const tenorSlice = createSlice({
  name: 'tenor',
  initialState,
  reducers: {
    setModalState: (state, action) => {
      state.isModalOpen = action.payload.isModalOpen;
      state.columnId = action.payload.columnId;
      state.itemId = action.payload.itemId;
    },
    selectGif: () => {},
    setGifLinks: (state, action) => {
      state.gifLinks = action.payload;
    },
    searchForGif: () => {},
    fetchTrending: () => {},
    fetchGifError: state => {
      state.gifLinks = initialGifs;
    },
  },
});

export const {
  setGifLinks,
  searchForGif,
  fetchGifError,
  setModalState,
  selectGif,
  fetchTrending,
} = tenorSlice.actions;

export default tenorSlice.reducer;
