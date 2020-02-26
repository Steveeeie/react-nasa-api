import { REQUEST_ASSET, RECEIVE_ASSET } from '../actionTypes';
import axios from 'axios';

function requestAsset() {
  return {
    type: REQUEST_ASSET
  };
}

function receiveAsset(item) {
  return {
    type: RECEIVE_ASSET,
    item
  };
}

export function fetchAsset(nasaid) {
  return async dispatch => {
    dispatch(requestAsset());

    const links = await axios
      .get(`https://images-api.nasa.gov/asset/${nasaid}`)
      .then(res => res.data.collection.items);

    const metadata = await axios
      .get(`https://images-api.nasa.gov/metadata/${nasaid}`)
      .then(res => axios.get(res.data.location).then(res => res.data));

    return dispatch(receiveAsset({ nasaid, links, metadata }));
  };
}
