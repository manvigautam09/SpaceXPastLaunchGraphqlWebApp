import actionsTypes from '../actionTypes';
import { PastLaunchDetails } from '../reducer/pastLaunchesReducer/type';

export const fetchPastMissionsRequest = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_REQUEST
  };
};

export const fetchPastMissionsSuccess = (payload: {
  pastLaunchesList: PastLaunchDetails[];
}) => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_SUCCESS,
    payload: payload
  };
};

export const fetchPastMissionsFailure = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_FAILURE
  };
};
