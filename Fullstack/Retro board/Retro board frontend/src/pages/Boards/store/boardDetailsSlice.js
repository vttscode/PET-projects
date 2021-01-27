/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const boardDertailsDoNotExist = {
  id: '',
  items: [],
};

const initialState = {
  boardDetails: boardDertailsDoNotExist,
  isBoardDetailsLoading: false,
  isBoardDetailsShowing: false,
};

const boardDetailsSlice = createSlice({
  name: 'boardDetails',
  initialState,
  reducers: {
    initiateBoardDetailsFetch: state => {
      state.boardDetails = boardDertailsDoNotExist;
      state.isBoardDetailsLoading = true;
      state.isBoardDetailsShowing = true;
    },
    setBoardDetails: (state, action) => {
      state.boardDetails = action.payload;
      state.isBoardDetailsLoading = false;
    },
    boardDetailsError: state => {
      state.isBoardDetailsLoading = false;
    },
  },
});

export const {
  initiateBoardDetailsFetch,
  setBoardDetails,
  boardDetailsError,
} = boardDetailsSlice.actions;

export default boardDetailsSlice.reducer;
