import React from 'react';
import { useSelector } from 'react-redux';
import FilterContainer from '../styled/FilterContainer';
import Seperator from '../styled/Seperator';
import Filters from './Filters';
import Results from './Results';
import Search from './Search';
import TransitionSnackbar from './TransitionSnackbar';

function HomePage() {
  const isFetching = useSelector(state => state.results.isFetching);

  return (
    <>
      <Seperator marginTop={{ xs: 4, md: 6 }} marginBottom={{ xs: 2, md: 4 }} />

      <FilterContainer>
        <Search />
        <Filters />
      </FilterContainer>

      <Seperator marginTop={{ xs: 3, md: 5 }} marginBottom={{ xs: 4, md: 6 }} />

      <Results />

      <TransitionSnackbar show={isFetching}>
        Updating Results&hellip;
      </TransitionSnackbar>
    </>
  );
}

export default HomePage;
