import { pathOr } from 'ramda';

import { tableLimitValues } from '../../../utils/appConstants';
import actionTypes from '../../actionTypes';
import { PastLaunchesActions, PastLaunchesState } from './type';

const initialState: PastLaunchesState = {
  pastLaunchesData: [],
  fetchingPastLaunches: false,
  totalPages: 0,
  currentPage: 0,
  filterDetails: {
    missionName: '',
    rocketName: ''
  },
  limit: tableLimitValues[0],
  offset: 0
};

function pastLaunchesReducer(
  state = initialState,
  action: PastLaunchesActions
) {
  switch (action.type) {
    case actionTypes.GET_PAST_MISSIONS_REQUEST:
      return { ...state, fetchingPastLaunches: true };

    case actionTypes.GET_PAST_MISSIONS_SUCCESS:
      return {
        ...state,
        fetchingPastLaunches: false,
        pastLaunchesData: pathOr([], ['payload', 'pastLaunchesList'], action),
        totalPages: pathOr(0, ['payload', 'totalPages'], action),
        currentPage: pathOr(0, ['payload', 'currentPage'], action),
        filterDetails: pathOr(
          { missionName: '', rocketName: '' },
          ['payload', 'filterDetails'],
          action
        ),
        limit: pathOr(0, ['payload', 'limit'], action),
        offset: pathOr(0, ['payload', 'offset'], action)
      };

    case actionTypes.GET_PAST_MISSIONS_FAILURE:
      return { ...state, fetchingPastLaunches: false };

    default:
      return { ...state };
  }
}

export default pastLaunchesReducer;
