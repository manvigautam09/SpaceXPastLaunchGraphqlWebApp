import { all } from 'redux-saga/effects';

import pastLaunchesSagas from './PastLaunches';

export const tasks = [...pastLaunchesSagas];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
