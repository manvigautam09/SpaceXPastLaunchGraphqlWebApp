import React, { useMemo } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PastLaunchFilters from '../../components/PastLaunchFilters';
import GenericTable from '../../components/shared/GenericTable';

import {
  useGetPastLunchesActionsHook,
  useGetPastLunchesDetailsHook
} from '../../store/hooks/pastLaunches';
import {
  tableRowHeadingOptions,
  TOTAL_PAST_MISSIONS
} from '../../utils/appConstants';

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const SpaceXDashboard = () => {
  const { setLimit, setOffset, fetchPastLaunchesRequestHandler } =
    useGetPastLunchesActionsHook();
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

  const rowHeadingOptions = useMemo(() => {
    return pastLaunchesData.map((tableItem) => {
      return {
        id: tableItem.id,
        launchDate: new Date(tableItem.launch_date_local).toDateString(),
        rocketName: tableItem.rocket.rocket_name,
        missionName: tableItem.mission_name
      };
    });
  }, [pastLaunchesData]);

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
      {fetchingPastLaunches ? (
        <div>Loading</div>
      ) : (
        <React.Fragment>
          <PastLaunchFilters filterDetails={filterDetails} />
          <GenericTable
            rowHeadingOptions={rowHeadingOptions}
            tableRowHeadingOptions={tableRowHeadingOptions}
            tablePaginationDetails={tablePaginationDetails}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SpaceXDashboard;
