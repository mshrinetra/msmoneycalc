//Include bootstrap's css 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
//Include bootstrap's js
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
