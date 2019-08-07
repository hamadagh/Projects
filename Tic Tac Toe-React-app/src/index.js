import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

