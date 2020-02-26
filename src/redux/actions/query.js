import { QUERY_CHANGED } from '../actionTypes';

export const queryChanged = query => ({
  type: QUERY_CHANGED,
  query
});
