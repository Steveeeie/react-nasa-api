import { QUERY_CHANGED } from '../actionTypes';

const initialState = '';

const query = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_CHANGED: {
      return action.query;
    }
    default: {
      return state;
    }
  }
};

export default query;
