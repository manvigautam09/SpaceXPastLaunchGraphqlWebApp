import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';

export const useGetPastLunchesActions = () => {
  const dispatch = useDispatch();

  const fetchPastLaunchesRequestHandler = useCallback(() => {
    dispatch(fetchPastMissionsRequest());
  }, [dispatch]);

  return { fetchPastLaunchesRequestHandler };
};
