import {
  fetchPastMissionsRequest,
  fetchPastMissionsSuccess,
  fetchPastMissionsFailure
} from '../../actions/fetchPastMissionsActions';

export interface PastMissionsRequestPayload {
  offset?: number;
  limit?: number;
  filterDetails?: MissionsFilters;
}

interface CoresFirstStage {
  flight: number;
  core: {
    reuse_count: number;
    status: string;
  };
}

interface PayloadSecondStage {
  payload_mass_kg: number;
  payload_mass_lbs: number;
  payload_type: string;
}

interface Ships {
  home_port: string;
  image: string;
  name: string;
}

export interface PastLaunchDetails {
  id: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    video_link: string;
  };
  mission_name: string;
  rocket: {
    rocket_name: string;
    first_stage: {
      cores: CoresFirstStage[];
    };
    second_stage: {
      payloads: PayloadSecondStage[];
    };
  };
  ships: Ships[];
}

export interface MissionsFilters {
  missionName: string;
  rocketName: string;
}
export interface PastLaunchesState {
  pastLaunchesData: PastLaunchDetails[];
  fetchingPastLaunches: boolean;
  totalPages: number;
  currentPage: number;
  filterDetails: MissionsFilters;
  limit: number;
  offset: number;
}

export type PastLaunchesActions = ReturnType<
  | typeof fetchPastMissionsRequest
  | typeof fetchPastMissionsSuccess
  | typeof fetchPastMissionsFailure
>;
