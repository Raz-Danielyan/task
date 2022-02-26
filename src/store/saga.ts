import { all } from "@redux-saga/core/effects";
import { CatsSaga } from "./ducs/Cats/sagas";

export default function* rootSaga() {
  yield all([
    CatsSaga()
  ]);
}