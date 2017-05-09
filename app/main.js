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
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'// 使用require导入css文件
/*eslint-enable*/

render(<Greeter />, document.getElementById('root'))
