import { render } from 'react-dom';

import { formats } from './data';
import App from './App';

import './index.scss';

render(
    <App formats={formats} />,
    document.querySelector('#app')
);