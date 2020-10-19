export const SET_IMAGES = 'gallery/SET_IMAGES';
export const TOGGLE_FETCHING = 'gallery/TOGGLE_FETCHING';
export const NEXT_PAGE = 'gallery/NEXT_PAGE';
export const ADD_PHOTOS = 'gallery/ADD_PHOTOS';

export const setPhotos = (photos) => ({
  type: SET_IMAGES,
  payload: {photos},
});

export const addPhotoss = (photos) => ({
  type: ADD_PHOTOS,
  payload: {photos},
});

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  payload: {isFetching},
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});
