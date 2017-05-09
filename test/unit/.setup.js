require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
})

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;

/**
 *  jack add for test with css-loader
 *  three ways
 */
// require('ignore-styles'); // the way one
// Prevent Mocha from compiling class // the way two
// function noop() {
//     return null;
// }
//
// require.extensions['.css'] = noop;
// require.extensions['.scss'] = noop;
var mockCssModules = require("mock-css-modules");   // the way three
mockCssModules.register(['.css', '.scss']);
