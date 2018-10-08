import * as types from '../actions/types';
import initiaState from './initialState';

export default function contentsReducer(state=initiaState, action) {
    switch (action.type) {
      case types.FLICKR_IMAGES_SUCCESS:
        return [...state, action.images];
      case types.SELECTED_IMAGE:
        return { ...state, selectedImage: action.image };
      default:
        return state;
    }
}