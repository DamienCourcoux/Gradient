import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from 'src/components/App';

import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
