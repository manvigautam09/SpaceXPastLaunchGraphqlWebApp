import { pathOr } from 'ramda';
import { put, select } from 'redux-saga/effects';

import { StoreState } from '../../types';
import {
  fetchPastMissionsFailure,
  fetchPastMissionsRequest,
  fetchPastMissionsSuccess
} from '../../actions/fetchPastMissionsActions';
import { mutationOrQueryProvider } from '../../../graphql';
import { getVariableToSend } from '../../../utils/helpers';
import { TOTAL_PAST_MISSIONS } from '../../../utils/appConstants';
import { GET_SPACE_X_PAST_LAUNCHES_QUERY } from '../../../graphql/queries';

function* fetchPastLaunchesSaga(
  action: ReturnType<typeof fetchPastMissionsRequest>
) {
  console.log('###action', action.payload);
  const { limit, filterDetails } = yield select((state: StoreState) => ({
    limit: state.pastLaunches.limit,
    filterDetails: state.pastLaunches.filterDetails
  }));
  const variables = getVariableToSend(limit, filterDetails, action.payload);
  console.log('###', variables);

  try {
    const res: any = yield mutationOrQueryProvider(
      GET_SPACE_X_PAST_LAUNCHES_QUERY,
      { ...variables }
    );

    const data = {
      totalPages: Math.ceil(TOTAL_PAST_MISSIONS / variables.limit),
      currentPage: (variables.offset + limit) / variables.limit,
      pastLaunchesList: pathOr([], ['launchesPast'], res),
      limit: variables.limit,
      offset: variables.offset,
      filterDetails: {
        missionName: variables.find.mission_name,
        rocketName: variables.find.rocket_name
      }
    };

    yield put(fetchPastMissionsSuccess(data));
  } catch (error) {
    console.log('###e', error);
    yield put(fetchPastMissionsFailure());
  }
}

export default fetchPastLaunchesSaga;
