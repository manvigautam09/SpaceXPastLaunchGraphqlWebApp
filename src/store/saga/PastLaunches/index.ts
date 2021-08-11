import { takeLatest } from 'redux-saga/effects';

import actionsTypes from '../../actionTypes';
import fetchPastLaunchesSaga from './fetchPastLaunchesSaga';

const pastLaunchesSagas = [
  takeLatest(actionsTypes.GET_PAST_MISSIONS_REQUEST, fetchPastLaunchesSaga)
];

export default pastLaunchesSagas;
