import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pastLaunchesDetailsSelector } from '../selectors/pastLauches';
import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';
import { PastMissionsRequestPayload } from '../reducer/pastLaunchesReducer/type';

export const useGetPastLunchesDetailsHook = () => {
  return useSelector(pastLaunchesDetailsSelector);
};

export const useGetPastLunchesActions = () => {
  const dispatch = useDispatch();

  const fetchPastLaunchesRequestHandler = useCallback(
    (payload: PastMissionsRequestPayload) => {
      dispatch(fetchPastMissionsRequest(payload));
    },
    [dispatch]
  );

  return { fetchPastLaunchesRequestHandler };
};
