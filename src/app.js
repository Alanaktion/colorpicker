import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

window.React = React;

const app = <App name="Color Picker" />;
ReactDOM.render(app, document.getElementById('app'));
