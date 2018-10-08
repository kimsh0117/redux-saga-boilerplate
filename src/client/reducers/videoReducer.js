import * as types from '../actions/types';
import initiaState from './initialState';

export default function contentsReducer(state=initiaState, action) {
    switch (action.type) {
      case types.SHUTTER_VIDEOS_SUCCESS:
        return [...state, action.videos];
      case types.SELECTED_VIDEO:
        return { ...state, selectedVideo: action.video };
      default:
        return state;
    }
}