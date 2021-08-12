import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { pastLaunchesDetailsSelector } from '../selectors/pastLauches';
import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';

export const useGetPastLunchesDetailsHook = () => {
  return useSelector(pastLaunchesDetailsSelector);
};

export const useGetPastLunchesActions = () => {
  const dispatch = useDispatch();

  const fetchPastLaunchesRequestHandler = useCallback(() => {
    dispatch(fetchPastMissionsRequest());
  }, [dispatch]);

  return { fetchPastLaunchesRequestHandler };
};
