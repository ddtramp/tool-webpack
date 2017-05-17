// //main.js
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());
// import React from 'react';
// import {render} from 'react-dom';
// import Greeter from './Greeter';
//
// render(<Greeter />, document.getElementById('root'));

// main.js
/*eslint-disable*/
import React from 'react';
import 'es6-promise/auto'; // old browser user import()
import {render} from 'react-dom';
import App from './App'
/*eslint-enable*/
render(<App/>, document.getElementById('root'))
