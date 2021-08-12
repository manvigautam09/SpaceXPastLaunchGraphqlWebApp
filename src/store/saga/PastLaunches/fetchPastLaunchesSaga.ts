import { pathOr } from 'ramda';
import { put } from 'redux-saga/effects';

import {
  fetchPastMissionsFailure,
  fetchPastMissionsSuccess
} from '../../actions/fetchPastMissionsActions';
import { mutationOrQueryProvider } from '../../../graphql';
import { GET_SPACE_X_PAST_LAUNCHES_QUERY } from '../../../graphql/queries';

function* fetchPastLaunchesSaga() {
  try {
    const res: any = yield mutationOrQueryProvider(
      GET_SPACE_X_PAST_LAUNCHES_QUERY
    );
    yield put(
      fetchPastMissionsSuccess({
        pastLaunchesList: pathOr([], ['launchesPast'], res)
      })
    );
  } catch (error) {
    console.log('###e', error);
    yield put(fetchPastMissionsFailure());
  }
}

export default fetchPastLaunchesSaga;
