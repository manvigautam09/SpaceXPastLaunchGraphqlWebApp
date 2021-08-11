import { all } from "redux-saga/effects";

export const tasks = [];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
