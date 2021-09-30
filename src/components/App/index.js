// == Import
import NbColors from 'src/components/NbColors/';
import TextColors from 'src/components/TextColors/';
import Gradient from 'src/components/Gradient/';
import DirectionButtons from 'src/components/DirectionButtons/';
import ColorButtons from 'src/components/ColorButtons/';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <ColorButtons />
    <TextColors />
    <Gradient />
    <DirectionButtons />
  </div>
);

// == Export
export default App;
