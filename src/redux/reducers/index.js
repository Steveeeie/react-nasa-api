import { combineReducers } from 'redux';
import query from './query';
import results from './results';
import assets from './assets';
import activeFilters from './activeFilters';

export default combineReducers({ query, results, assets, activeFilters });
