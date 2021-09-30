import { useSelector } from 'react-redux';

const TextColors = () => {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);

  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
};

export default TextColors;
