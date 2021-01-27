import { takeLatest, call, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import {
  selectGif,
  fetchGifError,
  searchForGif,
  setGifLinks,
  setModalState,
  fetchTrending,
} from './tenorSlice';
import { saveComment } from '../boardActions';
import api from './tenorApi';

function* searchForGifSaga(action) {
  try {
    const info = yield call(api.request, action.payload);

    yield put(
      setGifLinks(
        info.data.results.map(elem => {
          return { id: uuid(), url: elem.media[0].gif.url };
          // return { id: uuid(), url: elem.media[0].mediumgif.url };
        })
      )
    );
  } catch (e) {
    yield put(fetchGifError());
  }
}

function* pickSaga(action) {
  try {
    const { url, columnId, itemId } = action.payload;
    const commentObj = {
      id: uuid(),
      gifUrl: url,
    };
    yield put(saveComment({ columnId, itemId, commentObj }));
    yield put(setModalState({ isModalOpen: false }));
  } catch (e) {
    yield put(setModalState({ isModalOpen: false }));
  }
}

function* fetchTrendingSaga() {
  try {
    const response = yield call(api.requestTrending);
    yield put(
      setGifLinks(
        response.data.results.map(elem => {
          return { id: uuid(), url: elem.media[0].gif.url };
          // return { id: uuid(), url: elem.media[0].mediumgif.url };
        })
      )
    );
  } catch (e) {
    yield put(fetchGifError());
  }
}

function* tenorSaga() {
  yield takeLatest(searchForGif.type, searchForGifSaga);
  yield takeLatest(selectGif.type, pickSaga);
  yield takeLatest(fetchTrending.type, fetchTrendingSaga);
}

export default tenorSaga;
