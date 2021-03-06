// == Imports
import store from 'src/store';
import {
  CHANGE_BOTH_COLORS,
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
  createChangeDirectionAction,
} from 'src/store/actions';
import { randomHexColor, generateSpanColor } from './utils';

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({
      type: CHANGE_BOTH_COLORS,
      newFirstColor: randomHexColor(),
      newLastColor: randomHexColor(),
    });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({
      type: CHANGE_FIRST_COLOR,
      newFirstColor: randomHexColor(),
    });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({
      type: CHANGE_LAST_COLOR,
      newLastColor: randomHexColor(),
    });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(270));
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(90));
  });

document.getElementById('toTopRight')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(45));
  });

document.getElementById('toBottomRight')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(135));
  });

document.getElementById('toBottomLeft')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(225));
  });

document.getElementById('toTopLeft')
  .addEventListener('click', () => {
    store.dispatch(createChangeDirectionAction(315));
  });
