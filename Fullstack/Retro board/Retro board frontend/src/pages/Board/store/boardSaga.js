import { takeLatest, call, put } from 'redux-saga/effects';
import {
  UPVOTE_ITEM,
  ADD_ITEM,
  ADD_ITEM_COMMENT,
  FETCH_BOARD,
  DRAG_DROP_ITEM,
  CREATE_BOARD,
} from './boardActionTypes';
import { enqueueSnackbar } from '../../../components/Notistack/notistackSlice';
import {
  increaseVote,
  saveItem,
  saveComment,
  loadBoardSuccess,
  dragDropItemUpdate,
  createBoardSuccess,
} from './boardActions';
import api from './boardApi';

function* upvoteSaga(action) {
  try {
    // const {data} = yield call(api.updateVote);
    const { columnId, itemId } = action.payload;
    yield call(api.updateVote);
    yield put(increaseVote({ columnId, itemId }));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't upvote server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* addItemSaga(action) {
  try {
    yield call(api.addItem);
    yield put(saveItem(action.payload));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't add item, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* addCommentSaga(action) {
  try {
    const { columnId, itemId, commentObj } = action.payload;
    yield call(api.addItem);
    yield put(saveComment({ columnId, itemId, commentObj }));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't add comment, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* fetchBoardSaga(action) {
  try {
    console.log(action.payload.id);
    const result = yield call(api.fetchBoard);
    yield put(loadBoardSuccess(result.data.board));
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't fetch board, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* dragDropItemSaga(action) {
  try {
    yield put(dragDropItemUpdate(action.payload));
    yield call(api.updateItemsMock);
  } catch (e) {
    yield put(enqueueSnackbar({ text: 'Server error while draggin items', mode: 'ERROR_DEFAULT' }));
    yield put(
      dragDropItemUpdate({
        toColumnId: action.payload.from.columnId,
        from: {
          columnId: action.payload.toColumnId,
          itemId: action.payload.from.itemId,
        },
      })
    );
  }
}

function* createBoardSaga(action) {
  try {
    const { title, history } = action.payload;
    const result = yield call(api.createBoard);
    yield put(createBoardSuccess({ title, boardId: result.data.boardId }));
    history.push(`/boards/${result.data.boardId}`);
  } catch (e) {
    yield put(enqueueSnackbar({ text: "Can't create board, server error", mode: 'ERROR_DEFAULT' }));
  }
}

function* boardSaga() {
  yield takeLatest(UPVOTE_ITEM, upvoteSaga);
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(ADD_ITEM_COMMENT, addCommentSaga);
  yield takeLatest(FETCH_BOARD, fetchBoardSaga);
  yield takeLatest(DRAG_DROP_ITEM, dragDropItemSaga);
  yield takeLatest(CREATE_BOARD, createBoardSaga);
}

export default boardSaga;
