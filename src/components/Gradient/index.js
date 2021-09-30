import { useSelector } from 'react-redux';

const Gradient = () => {
  const direction = useSelector((state) => state.direction);
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);

  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  );
};

export default Gradient;
