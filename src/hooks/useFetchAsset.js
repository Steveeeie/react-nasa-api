import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsset } from '../redux/actions';

function useFetchAsset(nasaid) {
  const asset = useSelector(state => state.assets.items[nasaid]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!asset) {
      dispatch(fetchAsset(nasaid));
    }
  }, [nasaid, asset, dispatch]);
}

export default useFetchAsset;
