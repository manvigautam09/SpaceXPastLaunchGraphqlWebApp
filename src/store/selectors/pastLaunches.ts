import { StoreState } from '../types';

export const pastLaunchesDetailsSelector = (state: StoreState) => ({
  pastLaunchesData: state.pastLaunches.pastLaunchesData,
  fetchingPastLaunches: state.pastLaunches.fetchingPastLaunches,
  totalPages: state.pastLaunches.totalPages,
  currentPage: state.pastLaunches.currentPage,
  filterDetails: state.pastLaunches.filterDetails,
  limit: state.pastLaunches.limit,
  offset: state.pastLaunches.offset
});
