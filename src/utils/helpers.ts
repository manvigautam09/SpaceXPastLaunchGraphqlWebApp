import { isEmpty, isNil } from 'ramda';
import {
  MissionsFilters,
  PastMissionsRequestPayload
} from '../store/reducer/pastLaunchesReducer/type';

export const isNilOrEmpty = (value: any) => isNil(value) || isEmpty(value);

export const getVariableToSend = (
  limitFromState: number,
  filterDetailsFromState: MissionsFilters,
  payload: PastMissionsRequestPayload
) => {
  let variables = {
    offset: 0,
    limit: 0,
    find: {
      mission_name: '',
      rocket_name: ''
    }
  };
  if (payload.offset || payload.offset === 0) {
    variables = {
      offset: payload.offset,
      limit: limitFromState,
      find: {
        mission_name: filterDetailsFromState.missionName,
        rocket_name: filterDetailsFromState.rocketName
      }
    };
  } else {
    variables = {
      offset: 0,
      limit: payload.limit ? payload.limit : limitFromState,
      find: {
        mission_name:
          payload.filterDetails && payload.filterDetails.missionName.length > 0
            ? payload.filterDetails.missionName
            : filterDetailsFromState.missionName,
        rocket_name:
          payload.filterDetails && payload.filterDetails.rocketName.length > 0
            ? payload.filterDetails.rocketName
            : filterDetailsFromState.rocketName
      }
    };
  }
  return variables;
};
