import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChanged } from '../redux/actions';
import Checkbox from '../styled/Checkbox';

function Filters() {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.activeFilters);
  const handleChange = event => dispatch(filterChanged(event.target.name));

  return (
    <>
      <Checkbox>
        <input
          id="image"
          type="checkbox"
          name="image"
          checked={activeFilters.includes('image')}
          onChange={handleChange}
        />
        <label htmlFor="image">Images</label>
      </Checkbox>

      <Checkbox>
        <input
          id="audio"
          type="checkbox"
          name="audio"
          checked={activeFilters.includes('audio')}
          onChange={handleChange}
        />
        <label htmlFor="audio">Audio</label>
      </Checkbox>

      <Checkbox>
        <input
          id="video"
          type="checkbox"
          name="video"
          checked={activeFilters.includes('video')}
          onChange={handleChange}
        />
        <label htmlFor="video">Video</label>
      </Checkbox>
    </>
  );
}

export default Filters;
