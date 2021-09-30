const initialState = {
  firstColor: '#7158cc',
  lastColor: '#191919',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FIRST_COLOR':
      return {
        ...state,
        firstColor: action.newFirstColor,
        nbColors: state.nbColors + 1,
      };
    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        lastColor: action.newLastColor,
        nbColors: state.nbColors + 1,
      };
    case 'CHANGE_BOTH_COLORS':
      return {
        ...state,
        firstColor: action.newFirstColor,
        lastColor: action.newLastColor,
        nbColors: state.nbColors + 2,
      };
    case 'ROTATE_DIRECTTION':
      return {
        ...state,
        direction: action.angle,
      };
    default:
      return state;
  }
};

export default reducer;
