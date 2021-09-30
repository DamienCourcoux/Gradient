import { useDispatch } from 'react-redux';
import { createChangeDirectionAction } from 'src/store/actions';

const DirectionButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      {
        [45, 90, 135, 225, 270, 315].map((angle) => (
          <button
            key={angle}
            type="button"
            className="button"
            onClick={() => dispatch(createChangeDirectionAction(angle))}
          >
            {angle}°
          </button>
        ))
      }
    </div>
  );
};

export default DirectionButtons;
