import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../redux/actions';

function useFetchResults() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.query);
  const activeFilters = useSelector(state => state.activeFilters);

  useEffect(() => {
    dispatch(fetchResults(query, activeFilters));
  }, [query, activeFilters, dispatch]);
}

export default useFetchResults;
