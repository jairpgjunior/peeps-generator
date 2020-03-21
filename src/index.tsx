import React from 'react';
import ReactDOM from 'react-dom';
import { PeepsGenerator } from './components/PeepsGenerator';
import * as serviceWorker from './serviceWorker';

import 'rc-slider/assets/index.css';
import './styles/index.css';

ReactDOM.render(<PeepsGenerator />, document.getElementById('main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
