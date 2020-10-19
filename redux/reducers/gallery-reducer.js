import {SET_IMAGES} from '../actions/gallery-actions';
import {TOGGLE_FETCHING} from '../actions/gallery-actions';
import {NEXT_PAGE} from '../actions/gallery-actions';
import {ADD_PHOTOS} from '../actions/gallery-actions';

let initialState = {
  photos: [],
  page: 1,
  isFetching: false,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        photos: [...action.payload.photos],
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case ADD_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload.photos],
      };
    default:
      return state;
  }
};

export default galleryReducer;
