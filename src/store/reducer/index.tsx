import { combineReducers } from 'redux';

import pastLaunchesReducer from './pastLaunchesReducer';

export default combineReducers({ pastLaunches: pastLaunchesReducer });
