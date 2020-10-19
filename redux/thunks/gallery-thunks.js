import {galleryAPI} from '../../api/api';
import {
  setPhotos,
  toggleFetching,
  addPhotoss,
  nextPage,
} from '../actions/gallery-actions';

export const getPhotos = (page) => async (dispatch) => {
  dispatch(toggleFetching(true));

  let response = await galleryAPI.getPhotos(page);
  let result = await response.json();
  dispatch(setPhotos(result));
  dispatch(toggleFetching(false));
  dispatch(nextPage());

  console.log(result);
};

export const addPhotos = (page) => async (dispatch) => {
  console.log(page);

  let response = await galleryAPI.getPhotos(page);
  let result = await response.json();
  dispatch(addPhotoss(result));
  dispatch(nextPage());

  console.log(result);
};
