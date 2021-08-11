import {
  fetchPastMissionsRequest,
  fetchPastMissionsSuccess,
  fetchPastMissionsFailure
} from '../../actions/fetchPastMissionsActions';

export interface PastLaunchesState {
  pastLaunchesData: [];
  fetchingPastLaunches: boolean;
}

export type PastLaunchesActions = ReturnType<
  | typeof fetchPastMissionsRequest
  | typeof fetchPastMissionsSuccess
  | typeof fetchPastMissionsFailure
>;
