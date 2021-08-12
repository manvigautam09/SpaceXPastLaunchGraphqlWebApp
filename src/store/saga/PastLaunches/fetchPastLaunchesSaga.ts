import { pathOr } from 'ramda';
import { put } from 'redux-saga/effects';

import {
  fetchPastMissionsFailure,
  fetchPastMissionsRequest,
  fetchPastMissionsSuccess
} from '../../actions/fetchPastMissionsActions';
import { mutationOrQueryProvider } from '../../../graphql';
import { GET_SPACE_X_PAST_LAUNCHES_QUERY } from '../../../graphql/queries';
import { TOTAL_PAST_MISSIONS } from '../../../utils/appConstants';

function* fetchPastLaunchesSaga(
  action: ReturnType<typeof fetchPastMissionsRequest>
) {
  try {
    const res: any = yield mutationOrQueryProvider(
      GET_SPACE_X_PAST_LAUNCHES_QUERY,
      action.payload
    );

    if (
      action.payload.limit !== undefined &&
      action.payload.offset !== undefined
    ) {
      const data = {
        totalPages: Math.ceil(TOTAL_PAST_MISSIONS / action.payload.limit),
        currentPage:
          (action.payload.offset + action.payload.limit) / action.payload.limit,
        pastLaunchesList: pathOr([], ['launchesPast'], res)
      };

      yield put(fetchPastMissionsSuccess(data));
    }

    console.log('###action', action.payload);
  } catch (error) {
    console.log('###e', error);
    yield put(fetchPastMissionsFailure());
  }
}

export default fetchPastLaunchesSaga;
