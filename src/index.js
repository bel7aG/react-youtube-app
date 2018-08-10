import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('container'));
registerServiceWorker();
