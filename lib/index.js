"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _print = _interopRequireDefault(require("./print.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = _lodash.default.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'C and check the console!';
  btn.onclick = _print.default;
  element.appendChild(btn);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler

    document.body.appendChild(element);
  });
}