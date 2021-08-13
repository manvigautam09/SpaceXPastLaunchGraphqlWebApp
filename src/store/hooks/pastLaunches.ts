import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MissionsFilters,
  PastLaunchDetails,
  PastMissionsRequestPayload
} from '../reducer/pastLaunchesReducer/type';
import { pastLaunchesDetailsSelector } from '../selectors/pastLaunches';
import { fetchPastMissionsRequest } from '../actions/fetchPastMissionsActions';

export const useGetPastLunchesDetailsHook = () => {
  return useSelector(pastLaunchesDetailsSelector);
};

export const useGetPastLunchesActionsHook = () => {
  const dispatch = useDispatch();
  const [itemsToCompareList, setItemsToCompareList] = useState<
    PastLaunchDetails[]
  >([]);

  const fetchPastLaunchesRequestHandler = useCallback(
    (payload: PastMissionsRequestPayload) => {
      dispatch(fetchPastMissionsRequest(payload));
    },
    [dispatch]
  );

  const setLimit = useCallback(
    (val: number) => {
      fetchPastLaunchesRequestHandler({ limit: val });
      setItemsToCompareList([]);
    },
    [fetchPastLaunchesRequestHandler]
  );

  const setOffset = useCallback(
    (val: number) => {
      fetchPastLaunchesRequestHandler({ offset: val });
      setItemsToCompareList([]);
    },
    [fetchPastLaunchesRequestHandler]
  );

  const onSubmitFilters = useCallback(
    (filterDetails: MissionsFilters) => {
      fetchPastLaunchesRequestHandler({ filterDetails });
      setItemsToCompareList([]);
    },
    [fetchPastLaunchesRequestHandler]
  );

  return {
    itemsToCompareList,
    setLimit,
    setOffset,
    onSubmitFilters,
    setItemsToCompareList,
    fetchPastLaunchesRequestHandler
  };
};
