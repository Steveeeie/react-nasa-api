import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetchResults from '../hooks/useFetchResults';
import Grid from '../styled/Grid';
import Result from '../styled/Result';
import iconVideo from '../assets/icon-video.svg';
import iconAudio from '../assets/icon-audio.svg';
import iconImage from '../assets/icon-image.svg';

const icons = {
  video: iconVideo,
  image: iconImage,
  audio: iconAudio
};

function Results() {
  const results = useSelector(state => state.results);

  useFetchResults();

  return (
    <Grid>
      {results.items &&
        results.items.map(item => {
          const { title, media_type: type, nasa_id } = item.data[0];

          return (
            <Result as={Link} to={`asset/${nasa_id}`} key={nasa_id} data-testid="result-item">
              <Result.Type src={icons[type]} alt={type} />

              {(type === 'image' || type === 'video') && (
                <Result.Preview src={item.links[0].href} alt={title} />
              )}

              {type === 'audio' && <Result.Title>{title}</Result.Title>}
            </Result>
          );
        })}
    </Grid>
  );
}

export default Results;
