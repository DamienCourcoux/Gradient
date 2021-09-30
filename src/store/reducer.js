import {
  CHANGE_COLOR,
  ROTATE_DIRECTION,
} from 'src/store/actions';

const initialState = {
  firstColor: '#7158cc',
  lastColor: '#191919',
  direction: '45deg',
  nbColors: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        [action.colorKey]: action.newColor,
        nbColors: state.nbColors + 1,
      };
    case ROTATE_DIRECTION:
      return {
        ...state,
        direction: action.angle,
      };
    default:
      return state;
  }
};

export default reducer;
