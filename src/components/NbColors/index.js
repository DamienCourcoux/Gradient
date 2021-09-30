import { useSelector } from 'react-redux';

const NbColors = () => {
  const nbColors = useSelector((state) => state.nbColors);
  return (
    <div id="nbColors">
      {nbColors} {nbColors > 1 ? 'couleurs générées' : 'couleur générée'}
    </div>
  );
};

export default NbColors;
