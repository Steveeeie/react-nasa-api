import { REQUEST_RESULTS, RECEIVE_RESULTS } from '../actionTypes';
import axios from 'axios';

function requestResults(query, activeFilters) {
  return {
    type: REQUEST_RESULTS,
    query,
    activeFilters
  };
}

function receiveResults(json) {
  return {
    type: RECEIVE_RESULTS,
    items: json.collection.items,
    receivedAt: Date.now()
  };
}

export function fetchResults(query, activeFilters) {
  return dispatch => {
    dispatch(requestResults(query, activeFilters));

    return axios
      .get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=${activeFilters.toString()}`
      )
      .then(res => dispatch(receiveResults(res.data)));
  };
}
