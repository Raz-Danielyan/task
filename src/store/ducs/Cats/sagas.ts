import { takeEvery, call, put } from 'redux-saga/effects';
import { CatsApi } from '../../../services/api/Cats';
import { setCats, setCatsCategory, setCatsLoadingState } from './actions';
import { CatsActionType, FetchCatsActionInterface } from './contracts/ActionType';
import { Cat, LoadingState } from './contracts/CatsStructure';

export function* fetchCatsRequest({ payload }:FetchCatsActionInterface) {

  try {
    let items: Cat[] = yield call(CatsApi.fetchCats,payload);
    yield put(setCats(items));
  }
  catch (e) {
    yield put(setCatsLoadingState(LoadingState.ERROR));
  }
}
export function* fetchCatsCategoryRequest({ payload }:FetchCatsActionInterface) {

  try {
    let items: Cat[] = yield call(CatsApi.fetchCats,payload);
    yield put(setCatsCategory(items));
  }
  catch (e) {
    yield put(setCatsLoadingState(LoadingState.ERROR));
  }
}
export function* CatsSaga() {
  yield takeEvery(CatsActionType.FETCH_CATS_DATA, fetchCatsRequest);
  yield takeEvery(CatsActionType.FETCH_CATS_CATEGORY, fetchCatsCategoryRequest);
}