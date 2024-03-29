import actionsTypes from '../actionTypes';
import {
  MissionsFilters,
  PastLaunchDetails,
  PastMissionsRequestPayload
} from '../reducer/pastLaunchesReducer/type';

export const fetchPastMissionsRequest = (
  payload: PastMissionsRequestPayload
) => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_REQUEST,
    payload
  };
};

export const fetchPastMissionsSuccess = (payload: {
  pastLaunchesList: PastLaunchDetails[];
  totalPages: number;
  currentPage: number;
  limit: number;
  offset: number;
  filterDetails: MissionsFilters;
}) => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_SUCCESS,
    payload
  };
};

export const fetchPastMissionsFailure = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_FAILURE
  };
};
