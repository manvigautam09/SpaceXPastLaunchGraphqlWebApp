import React, { useMemo } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

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
  const { pastLaunchesData, fetchingPastLaunches } =
    useGetPastLunchesDetailsHook();

  useEffect(() => {
    fetchPastLaunchesRequestHandler();
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
      {fetchingPastLaunches && <div>Loading</div>}
      <table>
        <thead>
          <tr>
            {tableRowHeadingOptions.map((item) => {
              return <th key={item.value}>{item.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rowHeadingOptions.map((rowDetail) => (
            <tr key={rowDetail.id}>
              {tableRowHeadingOptions.map((item) => (
                <td key={item.label}>{rowDetail[item.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SpaceXDashboard;
