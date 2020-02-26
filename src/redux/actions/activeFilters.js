import { FILTER_CHANGED } from '../actionTypes';

export const filterChanged = name => ({
  type: FILTER_CHANGED,
  name
});
