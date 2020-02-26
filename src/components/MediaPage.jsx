import React from 'react';
import { useSelector } from 'react-redux';
import useFetchAsset from '../hooks/useFetchAsset';
import Seperator from '../styled/Seperator';
import TransitionSnackbar from './TransitionSnackbar';

function MediaPage({
  match: {
    params: { nasaid }
  }
}) {
  const isFetching = useSelector(state => state.assets.isFetching);
  const asset = useSelector(state => state.assets.items[nasaid]);

  useFetchAsset(nasaid);

  return (
    <>
      <Seperator marginTop={{ xs: 4, md: 6 }} marginBottom={{ xs: 4, md: 6 }} />

      {asset && (
        <div>
          <h1>{asset.metadata['AVAIL:Title']}</h1>
          <p>{asset.metadata['AVAIL:Description']}</p>

          {asset.metadata['AVAIL:MediaType'] === 'image' && (
            <img
              src={asset.links[1].href}
              alt={asset.metadata['AVAIL:Title']}
            />
          )}

          {asset.metadata['AVAIL:MediaType'] === 'audio' && (
            <audio src={asset.links[0].href} controls />
          )}

          {asset.metadata['AVAIL:MediaType'] === 'video' && (
            <video
              src={
                asset.links.filter(link => link.href.includes('.mp4'))[1].href
              }
              controls
            />
          )}
        </div>
      )}

      <TransitionSnackbar show={isFetching}>
        Loading Asset&hellip;
      </TransitionSnackbar>
    </>
  );
}

export default MediaPage;
