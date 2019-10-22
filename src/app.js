import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/Example';

window.React = React;

const app = <Example name="component" />;
ReactDOM.render(app, document.getElementById('app'));
