import { useDispatch } from 'react-redux';

import { CHANGE_COLOR } from 'src/store/actions';
import { randomHexColor } from 'src/utils';

const ColorButtons = () => {
  // on appelle le hook useDispatch
  // il va nous renvoyer la fonction dispatch
  const dispatch = useDispatch();

  const handleChangeFirstColor = () => {
    dispatch({
      type: CHANGE_COLOR,
      colorKey: 'firstColor',
      newColor: randomHexColor(),
    });
  };

  const handleChangeLastColor = () => {
    dispatch({
      type: CHANGE_COLOR,
      colorKey: 'lastColor',
      newColor: randomHexColor(),
    });
  };

  const handleChangeBothColors = () => {
    handleChangeFirstColor();
    handleChangeLastColor();
  };

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={handleChangeFirstColor}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={handleChangeBothColors}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={handleChangeLastColor}
      >
        Random Last
      </button>
    </div>
  );
};

export default ColorButtons;
