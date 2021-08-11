import actionsTypes from '../actionTypes';

export const fetchPastMissionsRequest = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_REQUEST
  };
};

export const fetchPastMissionsSuccess = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_SUCCESS
  };
};

export const fetchPastMissionsFailure = () => {
  return <const>{
    type: actionsTypes.GET_PAST_MISSIONS_FAILURE
  };
};
