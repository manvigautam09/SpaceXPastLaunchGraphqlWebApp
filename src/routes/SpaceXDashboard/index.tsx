import React, { useMemo } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PastLaunchFilters from '../../components/PastLaunchFilters';
import GenericTable from '../../components/shared/GenericTable';

import {
  useGetPastLunchesActions,
  useGetPastLunchesDetailsHook
} from '../../store/hooks/pastLaunches';
import { tableRowHeadingOptions } from '../../utils/appConstants';

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const SpaceXDashboard = () => {
  const { fetchPastLaunchesRequestHandler } = useGetPastLunchesActions();
  const { pastLaunchesData, fetchingPastLaunches, filterDetails } =
    useGetPastLunchesDetailsHook();

  useEffect(() => {
    fetchPastLaunchesRequestHandler({});
  }, [fetchPastLaunchesRequestHandler]);

  const rowHeadingOptions = useMemo(() => {
    return pastLaunchesData.map((tableItem) => {
      return {
        id: tableItem.id,
        launchDate: tableItem.launch_date_local,
        rocketName: tableItem.rocket.rocket_name,
        missionName: tableItem.mission_name
      };
    });
  }, [pastLaunchesData]);

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
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SpaceXDashboard;
