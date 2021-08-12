import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MissionsFilters,
  PastMissionsRequestPayload
} from '../reducer/pastLaunchesReducer/type';
import { pastLaunchesDetailsSelector } from '../selectors/pastLaunches';
import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';

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

  const onSubmitFilters = useCallback(
    (filterDetails: MissionsFilters) => {
      fetchPastLaunchesRequestHandler({ filterDetails });
    },
    [fetchPastLaunchesRequestHandler]
  );

  return {
    setLimit,
    setOffset,
    fetchPastLaunchesRequestHandler,
    onSubmitFilters
  };
};
