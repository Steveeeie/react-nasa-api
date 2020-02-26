import { REQUEST_RESULTS, RECEIVE_RESULTS } from '../actionTypes';

function results(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_RESULTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_RESULTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default results;
