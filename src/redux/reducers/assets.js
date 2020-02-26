import { REQUEST_ASSET, RECEIVE_ASSET } from '../actionTypes';

function assets(
  state = {
    isFetching: false,
    items: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_ASSET:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ASSET:
      return Object.assign({}, state, {
        isFetching: false,
        items: { ...state.items, [action.item.nasaid]: action.item },
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default assets;
