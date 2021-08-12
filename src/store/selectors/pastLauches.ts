import { StoreState } from '../types';

export const pastLaunchesDetailsSelector = (state: StoreState) => ({
  pastLaunchesData: state.pastLaunches.pastLaunchesData,
  fetchingPastLaunches: state.pastLaunches.fetchingPastLaunches
});
