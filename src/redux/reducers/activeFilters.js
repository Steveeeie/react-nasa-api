import { FILTER_CHANGED } from '../actionTypes';

const initialState = ['image'];

const activeFilters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED: {
      const { name } = action;
      let newState = [...state];

      if (newState.includes(name)) {
        newState = newState.filter(type => type !== action.name);
      } else {
        newState.push(name);
      }

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default activeFilters;
