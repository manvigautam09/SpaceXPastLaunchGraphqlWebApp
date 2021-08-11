import { useEffect } from 'react';
import { useGetPastLunchesActions } from '../../store/hooks/pastLaunches';

const SpaceXDashboard = () => {
  const { fetchPastLaunchesRequestHandler } = useGetPastLunchesActions();

  useEffect(() => {
    fetchPastLaunchesRequestHandler();
  }, [fetchPastLaunchesRequestHandler]);

  return <div>This is SpaceX Dashbord</div>;
};

export default SpaceXDashboard;
