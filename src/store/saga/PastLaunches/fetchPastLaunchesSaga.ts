import { fetchPastMissionsRequest } from '../../actions/fetchPastMissionsActions';

function* fetchPastLaunchesSaga(
  action: ReturnType<typeof fetchPastMissionsRequest>
) {
  console.log('##action', action);
}

export default fetchPastLaunchesSaga;
