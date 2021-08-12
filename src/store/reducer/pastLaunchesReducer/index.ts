import { pathOr } from 'ramda';
import actionTypes from '../../actionTypes';
import { PastLaunchesActions, PastLaunchesState } from './type';

const initialState: PastLaunchesState = {
  pastLaunchesData: [],
  fetchingPastLaunches: false
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
        pastLaunchesData: pathOr([], ['payload', 'pastLaunchesList'], action)
      };

    case actionTypes.GET_PAST_MISSIONS_FAILURE:
      return { ...state, fetchingPastLaunches: false };

    default:
      return { ...state };
  }
}

export default pastLaunchesReducer;
