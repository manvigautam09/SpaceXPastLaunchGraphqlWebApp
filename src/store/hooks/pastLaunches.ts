import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pastLaunchesDetailsSelector } from '../selectors/pastLauches';
import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';
import { PastMissionsRequestPayload } from '../reducer/pastLaunchesReducer/type';

export const useGetPastLunchesDetailsHook = () => {
  return useSelector(pastLaunchesDetailsSelector);
};

export const useGetPastLunchesActionsHook = () => {
  const dispatch = useDispatch();

  const fetchPastLaunchesRequestHandler = useCallback(
    (payload: PastMissionsRequestPayload) => {
      dispatch(fetchPastMissionsRequest(payload));
    },
    [dispatch]
  );

  const setLimit = useCallback(
    (val: number) => {
      fetchPastLaunchesRequestHandler({ limit: val });
    },
    [fetchPastLaunchesRequestHandler]
  );

  const setOffset = useCallback(
    (val: number) => {
      fetchPastLaunchesRequestHandler({ offset: val });
    },
    [fetchPastLaunchesRequestHandler]
  );

  return { setLimit, setOffset, fetchPastLaunchesRequestHandler };
};
