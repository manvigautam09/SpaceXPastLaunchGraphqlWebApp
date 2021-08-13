import React, { useMemo, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import {
  tableRowHeadingOptions,
  TOTAL_PAST_MISSIONS
} from '../../utils/appConstants';
import {
  useGetPastLunchesActionsHook,
  useGetPastLunchesDetailsHook
} from '../../store/hooks/pastLaunches';
import GenericTable from '../../components/shared/GenericTable';
import PastLaunchFilters from '../../components/PastLaunchFilters';
import { PastLaunchDetails } from '../../store/reducer/pastLaunchesReducer/type';

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SpaceXDashboard = () => {
  const {
    itemsToCompareList,
    setLimit,
    setOffset,
    onSubmitFilters,
    setItemsToCompareList,
    fetchPastLaunchesRequestHandler
  } = useGetPastLunchesActionsHook();
  const {
    pastLaunchesData,
    fetchingPastLaunches,
    filterDetails,
    limit,
    offset,
    totalPages,
    currentPage
  } = useGetPastLunchesDetailsHook();

  useEffect(() => {
    fetchPastLaunchesRequestHandler({});
  }, [fetchPastLaunchesRequestHandler]);

  const getCheckBoxValue = useCallback(
    (tableItem: PastLaunchDetails) => {
      if (itemsToCompareList.length === 0) {
        return false;
      } else {
        let value = false;
        itemsToCompareList.forEach((item) => {
          if (tableItem.id === item.id) {
            value = true;
          }
        });
        return value;
      }
    },
    [itemsToCompareList]
  );

  const rowHeadingOptions = useMemo(() => {
    return pastLaunchesData.map((tableItem) => {
      return {
        id: tableItem.id,
        launchDate: new Date(tableItem.launch_date_local).toDateString(),
        rocketName: tableItem.rocket.rocket_name,
        missionName: tableItem.mission_name,
        link: tableItem.links.video_link,
        compareCheckboxValues: (
          <Checkbox
            type="checkbox"
            checked={getCheckBoxValue(tableItem)}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              if (getCheckBoxValue(tableItem)) {
                setItemsToCompareList(
                  itemsToCompareList.filter((item) => item.id !== tableItem.id)
                );
              } else {
                if (itemsToCompareList.length < 2) {
                  setItemsToCompareList([...itemsToCompareList, tableItem]);
                } else {
                  setItemsToCompareList([tableItem]);
                }
              }
            }}
          />
        )
      };
    });
  }, [
    getCheckBoxValue,
    pastLaunchesData,
    itemsToCompareList,
    setItemsToCompareList
  ]);

  const tablePaginationDetails = {
    limit,
    offset,
    totalPages,
    totalItems: TOTAL_PAST_MISSIONS,
    currentPage,
    setLimit,
    setOffset
  };

  return (
    <React.Fragment>
      <Header>
        <h1>SpaceX Past Missions</h1>
      </Header>
      <React.Fragment>
        <PastLaunchFilters
          filterDetails={filterDetails}
          onSubmitFilters={onSubmitFilters}
          itemsToCompareList={itemsToCompareList}
        />

        <GenericTable
          loading={fetchingPastLaunches}
          rowHeadingOptions={rowHeadingOptions}
          tableRowHeadingOptions={tableRowHeadingOptions}
          tablePaginationDetails={tablePaginationDetails}
        />
      </React.Fragment>
    </React.Fragment>
  );
};

export default SpaceXDashboard;
