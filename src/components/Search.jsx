import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryChanged } from '../redux/actions';
import SearchInput from '../styled/SearchInput';

function Search() {
  const initialQuery = useSelector(state => state.query);
  const [query, setQuery] = useState(initialQuery);
  const [debounceTimeout, setDebounceTimout] = useState();
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;

    setQuery(value);

    clearTimeout(debounceTimeout);

    const timeout = setTimeout(() => {
      dispatch(queryChanged(value));
    }, 500);

    setDebounceTimout(timeout);
  };

  return (
    <SearchInput
      placeholder="Search NASA's media API&hellip;"
      value={query}
      onChange={handleChange}
    />
  );
}

export default Search;
